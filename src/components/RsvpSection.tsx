import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { Heart, Send, Users, MessageCircle, Calendar, Gift, Copy, Check, CreditCard, Wallet, QrCode, Download } from "lucide-react";
import { BatikDivider } from "./BatikDivider";

interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
  isAttending: boolean;
}

export function RsvpSection() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    guests: "1",
    message: "",
  });

  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const [wishes, setWishes] = useState<Wish[]>([
    {
      id: "1",
      name: "Keluarga Besar Wijaya",
      message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair.",
      timestamp: new Date("2025-10-15"),
      isAttending: true,
    },
    {
      id: "2",
      name: "Teman SMA",
      message: "Congrats guys! Akhirnya kalian menikah juga. Semoga langgeng sampai kakek nenek ya! 🎉",
      timestamp: new Date("2025-10-16"),
      isAttending: true,
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newWish: Wish = {
      id: Date.now().toString(),
      name: formData.name,
      message: formData.message,
      timestamp: new Date(),
      isAttending: formData.attendance === "hadir",
    };

    if (formData.message) {
      setWishes([newWish, ...wishes]);
    }

    toast.success("Terima kasih! Konfirmasi kehadiran Anda telah diterima.", {
      description: formData.message ? "Doa dan ucapan Anda sangat berarti bagi kami." : "Kami sangat menantikan kehadiran Anda.",
    });
    setFormData({ name: "", attendance: "", guests: "1", message: "" });
  };

  const copyToClipboard = (text: string, accountName: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedAccount(accountName);
      toast.success("Nomor rekening berhasil disalin!", {
        description: `${accountName} - ${text}`,
      });
      setTimeout(() => setCopiedAccount(null), 2000);
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#FEFDFB] to-[#F4EFE6] relative overflow-hidden">
      <BatikDivider />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#D4AF37]/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-[#5C1F1F]/10 rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heart className="w-12 h-12 text-[#D4AF37] mx-auto mb-4 fill-[#D4AF37]" />
          <h2 className="javanese-title text-5xl md:text-6xl text-[#2A3B6C] mb-4">
            Konfirmasi Kehadiran
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-[#5C1F1F] font-['Plus_Jakarta_Sans'] text-lg max-w-2xl mx-auto">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir untuk memberikan doa restu kepada kami.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* RSVP Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-[#D4AF37]/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#2A3B6C] font-['Plus_Jakarta_Sans'] font-semibold flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Nama Lengkap *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 text-[#2A3B6C] font-['Plus_Jakarta_Sans']"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-[#2A3B6C] font-['Plus_Jakarta_Sans'] font-semibold flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Konfirmasi Kehadiran *
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: "hadir" })}
                    className={`py-4 px-4 rounded-xl border-2 transition-all font-['Plus_Jakarta_Sans'] font-semibold ${
                      formData.attendance === "hadir"
                        ? "bg-[#2A3B6C] border-[#2A3B6C] text-white shadow-lg"
                        : "border-[#D4AF37]/30 text-[#2A3B6C] hover:border-[#D4AF37] hover:bg-[#F4EFE6]"
                    }`}
                  >
                    ✓ Hadir
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: "tidak-hadir" })}
                    className={`py-4 px-4 rounded-xl border-2 transition-all font-['Plus_Jakarta_Sans'] font-semibold ${
                      formData.attendance === "tidak-hadir"
                        ? "bg-[#5C1F1F] border-[#5C1F1F] text-white shadow-lg"
                        : "border-[#D4AF37]/30 text-[#2A3B6C] hover:border-[#D4AF37] hover:bg-[#F4EFE6]"
                    }`}
                  >
                    ✗ Tidak Hadir
                  </motion.button>
                </div>
              </div>

              {formData.attendance === "hadir" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-2"
                >
                  <Label htmlFor="guests" className="text-[#2A3B6C] font-['Plus_Jakarta_Sans'] font-semibold">
                    Jumlah Tamu
                  </Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="5"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 text-[#2A3B6C] font-['Plus_Jakarta_Sans']"
                  />
                  <p className="text-sm text-[#5C1F1F] font-['Plus_Jakarta_Sans']">
                    Maksimal 5 orang per undangan
                  </p>
                </motion.div>
              )}

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#2A3B6C] font-['Plus_Jakarta_Sans'] font-semibold flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Ucapan & Doa (Opsional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tulis ucapan dan doa untuk kami..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 text-[#2A3B6C] font-['Plus_Jakarta_Sans'] min-h-32"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#2A3B6C] to-[#5C1F1F] hover:from-[#1F2D5C] hover:to-[#4A1818] text-white py-6 rounded-xl font-['Plus_Jakarta_Sans'] font-semibold text-lg shadow-lg"
                disabled={!formData.name || !formData.attendance}
              >
                <Send className="w-5 h-5 mr-2" />
                Kirim Konfirmasi
              </Button>
            </form>
          </motion.div>

          {/* Wishes Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-[#D4AF37]/20"
          >
            <h3 className="text-2xl text-[#2A3B6C] font-['Playfair_Display'] mb-6 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-[#D4AF37]" />
              Ucapan & Doa dari Tamu
            </h3>
            
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {wishes.length === 0 ? (
                <div className="text-center py-12 text-[#5C1F1F]/50">
                  <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="font-['Plus_Jakarta_Sans']">Belum ada ucapan</p>
                </div>
              ) : (
                wishes.map((wish, index) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-[#F4EFE6] to-[#FEFDFB] rounded-xl p-5 border border-[#D4AF37]/20 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2A3B6C] to-[#5C1F1F] flex items-center justify-center text-white font-['Playfair_Display'] font-bold text-lg">
                        {wish.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[#2A3B6C]">
                            {wish.name}
                          </h4>
                          {wish.isAttending && (
                            <span className="text-xs bg-[#2A3B6C] text-white px-2 py-1 rounded-full font-['Plus_Jakarta_Sans']">
                              ✓ Hadir
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#5C1F1F]/60 font-['Plus_Jakarta_Sans']">
                          {wish.timestamp.toLocaleDateString('id-ID', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#5C1F1F] font-['Plus_Jakarta_Sans'] text-sm leading-relaxed">
                      {wish.message}
                    </p>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>

        {/* Wedding Gift - Premium Enhanced UI/UX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background container with gradient and patterns */}
          <div className="bg-gradient-to-br from-[#F4EFE6] via-[#FEFDFB] to-[#F8F3E8] rounded-3xl shadow-2xl overflow-hidden border-2 border-[#D4AF37]/20">
            {/* Decorative patterns */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20px 20px, #D4AF37 2px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#2A3B6C]/5 rounded-full blur-2xl"></div>

            <div className="relative z-10 p-8 md:p-12">
              {/* Header Section */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#D4AF37] via-[#E5C158] to-[#F4D170] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl transform rotate-12">
                      <Gift className="w-12 h-12 text-white transform -rotate-12" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#5C1F1F] rounded-full flex items-center justify-center animate-bounce">
                      <Heart className="w-4 h-4 text-white fill-white" />
                    </div>
                  </div>
                </motion.div>
                
                <h3 className="javanese-title text-4xl md:text-6xl text-[#2A3B6C] mb-4 drop-shadow-sm">
                  Amplop Digital
                </h3>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-16 h-1 bg-[#D4AF37] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
                  <div className="w-16 h-1 bg-[#D4AF37] rounded-full"></div>
                </div>
                <p className="text-[#5C1F1F] font-['Plus_Jakarta_Sans'] text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4 font-medium">
                  Doa restu Anda adalah hadiah terindah bagi kami. 
                  Namun jika memberi adalah ungkapan tanda kasih Anda, 
                  kami menerima dengan penuh syukur dan terima kasih.
                </p>
              </div>

              {/* Info Banner */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#2A3B6C] to-[#5C1F1F] backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-4 mb-8 max-w-2xl mx-auto shadow-lg"
              >
                <div className="flex items-center justify-center gap-3 text-white">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
                  <p className="font-['Plus_Jakarta_Sans'] text-sm md:text-base text-center font-medium">
                    Pilih rekening di bawah dan klik untuk menyalin nomor secara otomatis
                  </p>
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
                </div>
              </motion.div>
              
              {/* Bank Cards Grid */}
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* BCA Card - With Logo */}
                <motion.div
                  initial={{ opacity: 0, x: -30, rotateY: -20 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="group perspective-1000"
                >
                  <div className="relative bg-gradient-to-br from-[#005BAC] via-[#0066CC] to-[#003D7A] rounded-3xl p-8 shadow-2xl hover:shadow-[#005BAC]/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-white/10">
                    {/* Card chip simulation */}
                    <div className="absolute top-6 right-6 w-12 h-10 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg opacity-80"></div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 group-hover:scale-110 transition-transform duration-500"></div>
                    
                    <div className="relative z-10 space-y-6">
                      {/* Bank Header with Logo */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2">
                            <img 
                              src="/images/icon-bank/BCA.png" 
                              alt="BCA Logo" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <p className="text-gray-200 text-xs font-['Plus_Jakarta_Sans'] uppercase tracking-wider font-semibold">Bank Transfer</p>
                            <p className="text-gray-900 font-['Plus_Jakarta_Sans'] font-bold text-2xl tracking-wide">BCA</p>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                          <Wallet className="w-6 h-6 text-gray-900" />
                        </div>
                      </div>
                      
                      {/* Account Number Section */}
                      <div className="space-y-2">
                        <p className="text-gray-200 text-xs font-['Plus_Jakarta_Sans'] uppercase tracking-wider flex items-center gap-2 font-semibold">
                          <div className="w-1 h-4 bg-[#D4AF37] rounded-full"></div>
                          Nomor Rekening
                        </p>
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-white/40 shadow-inner">
                          <p className="text-[#005BAC] font-mono text-2xl md:text-3xl font-bold tracking-[0.3em] text-center">
                            1234567890
                          </p>
                        </div>
                      </div>
                      
                      {/* Account Holder */}
                      <div className="space-y-2">
                        <p className="text-gray-200 text-xs font-['Plus_Jakarta_Sans'] uppercase tracking-wider flex items-center gap-2 font-semibold">
                          <div className="w-1 h-4 bg-[#D4AF37] rounded-full"></div>
                          Nama Pemilik
                        </p>
                        <p className="text-gray-900 font-['Plus_Jakarta_Sans'] text-xl font-bold tracking-wide pl-3">
                          Budi Santoso
                        </p>
                      </div>
                      
                      {/* Copy Button */}
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => copyToClipboard("1234567890", "Bank BCA")}
                        className={`w-full py-4 rounded-2xl font-['Plus_Jakarta_Sans'] font-bold text-base flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl relative overflow-hidden group/button ${
                          copiedAccount === "Bank BCA" 
                            ? "bg-green-500 hover:bg-green-600 text-white" 
                            : "bg-white hover:bg-white/95 text-gray-900"
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-200%] group-hover/button:translate-x-[200%] transition-transform duration-700"></div>
                        {copiedAccount === "Bank BCA" ? (
                          <>
                            <Check className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">Berhasil Disalin! ✓</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">Salin Nomor Rekening</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* QRIS Card - New Design */}
                <motion.div
                  initial={{ opacity: 0, x: 30, rotateY: 20 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="group perspective-1000"
                >
                  <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border-2 border-gray-200">
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 rounded-full -mr-24 -mt-24 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full -ml-16 -mb-16 group-hover:scale-110 transition-transform duration-500"></div>
                    
                    <div className="relative z-10 space-y-6">
                      {/* QRIS Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2">
                            <img 
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/QRIS_logo.svg/2560px-QRIS_logo.svg.png" 
                              alt="QRIS Logo" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <p className="text-gray-600 text-xs font-['Plus_Jakarta_Sans'] uppercase tracking-wider font-semibold">Scan & Pay</p>
                            <p className="text-gray-900 font-['Plus_Jakarta_Sans'] font-bold text-2xl tracking-wide">QRIS</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                            <div className="w-6 h-6 bg-red-500 rounded"></div>
                          </div>
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <div className="w-6 h-6 bg-blue-500 rounded"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* QR Code Display */}
                      <div className="space-y-3">
                        <p className="text-gray-700 text-xs font-['Plus_Jakarta_Sans'] uppercase tracking-wider flex items-center gap-2 font-semibold text-center">
                          <div className="w-1 h-4 bg-[#D4AF37] rounded-full"></div>
                          Scan QR Code
                          <div className="w-1 h-4 bg-[#D4AF37] rounded-full"></div>
                        </p>
                        <div className="bg-white rounded-2xl p-6 border-4 border-gray-200 shadow-inner flex items-center justify-center">
                          {/* QR Code Placeholder - You can replace with actual QR image */}
                          <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <QrCode className="w-32 h-32 text-gray-400" />
                            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center">
                              <p className="text-gray-600 text-sm font-['Plus_Jakarta_Sans'] font-semibold text-center px-4">
                                QR Code<br />Coming Soon
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-500 text-xs font-['Plus_Jakarta_Sans'] text-center">
                          Scan dengan aplikasi e-wallet atau mobile banking Anda
                        </p>
                      </div>
                      
                      {/* Download Button */}
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full bg-white hover:bg-gray-50 py-4 rounded-2xl font-['Plus_Jakarta_Sans'] font-bold text-base flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl relative overflow-hidden group/button border-2 border-gray-200"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent translate-x-[-200%] group-hover/button:translate-x-[200%] transition-transform duration-700"></div>
                        <Download className="w-5 h-5 text-gray-900 relative z-10" />
                        <span className="text-gray-900 relative z-10">Download QR Code</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Thank You Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                className="mt-12 text-center space-y-4"
              >
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#E5C158]/20 backdrop-blur-sm border-2 border-[#D4AF37]/40 rounded-full px-8 py-4 shadow-lg">
                  <Heart className="w-5 h-5 text-[#5C1F1F] fill-[#5C1F1F] animate-pulse" />
                  <p className="text-[#2A3B6C] font-['Plus_Jakarta_Sans'] font-bold">
                    Terima kasih atas perhatian dan kemurahan hati Anda
                  </p>
                  <Heart className="w-5 h-5 text-[#5C1F1F] fill-[#5C1F1F] animate-pulse" />
                </div>
                <p className="text-[#5C1F1F]/80 font-['Plus_Jakarta_Sans'] text-sm max-w-xl mx-auto leading-relaxed font-medium">
                  Kehadiran Anda di hari bahagia kami sudah lebih dari cukup, 
                  namun jika memberi adalah ungkapan kasih sayang, kami menerimanya dengan penuh syukur.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
