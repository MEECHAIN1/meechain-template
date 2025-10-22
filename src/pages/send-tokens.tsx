import { useState } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Send, QrCode, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useQuery } from '@tanstack/react-query';
import { isValidAddress, truncateAddress } from '@/lib/web3-utils';
import logoUrl from '@/assets/branding/logo.png';

export default function SendTokens() {
  const [location, navigate] = useLocation();
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Fetch token balances
  const { data: balances } = useQuery({
    queryKey: ['/api/wallet/balances'],
    queryFn: async () => {
      const response = await fetch('/api/wallet/balances', {
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to fetch balances');
      }
      return response.json();
    },
  });

  const handleSend = async () => {
    if (!toAddress || !amount || !selectedToken) {
      toast({
        title: "กรุณากรอกข้อมูลให้ครบ",
        description: "โปรดกรอกที่อยู่ผู้รับ จำนวน และเลือกโทเค็น",
        variant: "destructive",
      });
      return;
    }

    if (!isValidAddress(toAddress)) {
      toast({
        title: "ที่อยู่ไม่ถูกต้อง",
        description: "โปรดตรวจสอบที่อยู่ Wallet ให้ถูกต้อง",
        variant: "destructive",
      });
      return;
    }

    const selectedTokenData = balances?.tokens?.find((t: any) => t.id === selectedToken);
    if (!selectedTokenData) {
      toast({
        title: "โทเค็นไม่ถูกต้อง",
        description: "ไม่พบโทเค็นที่เลือก",
        variant: "destructive",
      });
      return;
    }

    const balance = parseFloat(selectedTokenData.balance);
    const sendAmount = parseFloat(amount);
    
    if (sendAmount > balance) {
      toast({
        title: "ยอดเงินไม่เพียงพอ",
        description: `คุณมี ${balance} ${selectedTokenData.symbol} เท่านั้น`,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // In a real app, this would make an actual blockchain transaction
      // For now, simulate the transaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "ธุรกรรมสำเร็จ! 🎉",
        description: `ส่ง ${amount} ${selectedTokenData.symbol} เรียบร้อยแล้ว`,
      });

      // Reset form
      setToAddress('');
      setAmount('');
      setSelectedToken('');
      
      // Navigate back after a delay
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (error) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถส่งโทเค็นได้ กรุณาลองใหม่อีกครั้ง",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const tokens = balances?.tokens || [];
  const selectedTokenData = tokens.find((t: any) => t.id === selectedToken);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="p-6 flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/dashboard')}
          data-testid="button-back"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-3">
          <img src={logoUrl} alt="MeeChain" className="w-8 h-8" />
          <h1 className="text-xl font-bold">ส่งโทเค็น</h1>
        </div>
      </div>

      <div className="px-6 pb-6 space-y-6">
        {/* Send Form */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Send className="w-5 h-5" />
              ส่งโทเค็น
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Recipient Address */}
            <div className="space-y-2">
              <Label htmlFor="recipient" className="text-white">ที่อยู่ผู้รับ</Label>
              <div className="flex gap-2">
                <Input
                  id="recipient"
                  placeholder="0x..."
                  value={toAddress}
                  onChange={(e) => setToAddress(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  data-testid="input-recipient"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    toast({
                      title: "QR Scanner",
                      description: "ฟีเจอร์นี้จะเปิดใช้งานในเร็วๆ นี้",
                    });
                  }}
                  data-testid="button-scan-qr"
                >
                  <QrCode className="w-4 h-4" />
                </Button>
              </div>
              {toAddress && !isValidAddress(toAddress) && (
                <p className="text-red-400 text-sm">ที่อยู่ไม่ถูกต้อง</p>
              )}
            </div>

            {/* Token Selection */}
            <div className="space-y-2">
              <Label htmlFor="token" className="text-white">เลือกโทเค็น</Label>
              <Select value={selectedToken} onValueChange={setSelectedToken}>
                <SelectTrigger className="bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="เลือกโทเค็นที่ต้องการส่ง" />
                </SelectTrigger>
                <SelectContent>
                  {tokens.map((token: any) => (
                    <SelectItem key={token.id} value={token.id}>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-xs font-bold">
                          {token.symbol[0]}
                        </div>
                        <span>{token.symbol}</span>
                        <span className="text-muted-foreground">({parseFloat(token.balance).toFixed(4)})</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-white">จำนวน</Label>
              <div className="space-y-2">
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  data-testid="input-amount"
                />
                {selectedTokenData && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      คงเหลือ: {parseFloat(selectedTokenData.balance).toFixed(4)} {selectedTokenData.symbol}
                    </span>
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => setAmount(selectedTokenData.balance)}
                      className="h-auto p-0 text-accent hover:text-accent/80"
                      data-testid="button-max"
                    >
                      ส่งทั้งหมด
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Transaction Summary */}
            {toAddress && amount && selectedTokenData && isValidAddress(toAddress) && (
              <div className="bg-white/10 rounded-lg p-4 space-y-2">
                <h4 className="font-semibold">สรุปธุรกรรม</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>ส่งไปที่:</span>
                    <span className="font-mono">{truncateAddress(toAddress)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>จำนวน:</span>
                    <span>{amount} {selectedTokenData.symbol}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ค่าธรรมเนียม:</span>
                    <span className="text-green-400">ฟรี</span>
                  </div>
                </div>
              </div>
            )}

            <Button
              onClick={handleSend}
              disabled={!toAddress || !amount || !selectedToken || !isValidAddress(toAddress) || isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 py-3"
              data-testid="button-send"
            >
              {isLoading ? "กำลังส่ง..." : "ส่งโทเค็น"}
            </Button>
          </CardContent>
        </Card>

        {/* Warning */}
        <Card className="bg-red-500/10 border-red-500/20 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-300 mb-2">คำเตือนสำคัญ</h3>
                <ul className="text-sm text-red-200 space-y-1">
                  <li>• ตรวจสอบที่อยู่ผู้รับให้ถูกต้องก่อนส่ง</li>
                  <li>• การโอนผิดที่อยู่จะไม่สามารถกู้คืนได้</li>
                  <li>• รองรับเฉพาะโทเค็นบน Polygon Network</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}