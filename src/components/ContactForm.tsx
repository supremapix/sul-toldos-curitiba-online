import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { openWhatsapp } from "@/utils/whatsapp";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e telefone.",
        variant: "destructive"
      });
      return;
    }

    const message = `*Novo contato - Toldos Comerciais Curitiba*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Email:* ${formData.email || "Não informado"}
*Serviço:* ${formData.service || "Não especificado"}
*Mensagem:* ${formData.message || "Não informada"}

_Enviado pelo site Toldos Comerciais Curitiba_`;

    openWhatsapp(message);

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Sua mensagem será enviada via WhatsApp.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#F4EFE6] text-[#1C1F22] border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C8361D] font-sans font-bold text-xs tracking-[0.2em] uppercase block mb-3">
            CONTATO & ORÇAMENTO
          </span>
          <h2 
            className="text-3xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight mb-4 text-[#1C1F22]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Solicite Sua Visita Técnica Gratuita
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Preencha os dados abaixo e nossa equipe comercial entrará em contato para agendar a visita sem custo e sem compromisso para sua empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white border border-border rounded-[2px] shadow-none">
            <CardHeader className="p-6 pb-4 border-b border-gray-100">
              <CardTitle 
                className="text-xl font-extrabold uppercase text-[#1C1F22]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Formulário de Contato Comercial
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(41) 99999-9999"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Tipo de Serviço</Label>
                  <Select onValueChange={handleServiceChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="toldo-fachada">Toldo de Fachada (Fixo/Capota)</SelectItem>
                      <SelectItem value="toldo-retratil">Toldo Retrátil Comercial</SelectItem>
                      <SelectItem value="cobertura-policarbonato">Cobertura em Policarbonato</SelectItem>
                      <SelectItem value="toldo-cristal">Toldo Cortina / Fechamento</SelectItem>
                      <SelectItem value="cobertura-industrial">Cobertura de Galpão / Carga</SelectItem>
                      <SelectItem value="manutencao">Manutenção e Troca de Lona</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva o projeto comercial ou dúvida..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold text-xs uppercase tracking-wider py-5 rounded-[2px] cursor-pointer"
                >
                  Falar no WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white border border-border rounded-[2px] shadow-none">
              <CardContent className="p-6 text-left">
                <h3 
                  className="text-xl font-extrabold uppercase text-[#1C1F22] mb-6 border-b border-gray-100 pb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Canais de Atendimento
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-[#C8361D] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm uppercase text-[#1C1F22]">Telefones Comerciais</h4>
                      <p className="text-xs text-gray-600">(41) 3564-6943</p>
                      <p className="text-xs text-gray-600">(41) 99812-1324</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[#C8361D] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm uppercase text-[#1C1F22]">E-mail Corporativo</h4>
                      <p className="text-xs text-gray-600">contato@toldoscomerciaiscuritiba.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#C8361D] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm uppercase text-[#1C1F22]">Fábrica & Showroom</h4>
                      <p className="text-xs text-gray-600">
                        Rua Mandirituba, 1875<br />
                        CEP 81.925-540 - Curitiba/PR
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#C8361D] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm uppercase text-[#1C1F22]">Horário de Atendimento</h4>
                      <p className="text-xs text-gray-600">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1C1F22] text-[#F4EFE6] border border-white/5 rounded-[2px] shadow-none">
              <CardContent className="p-6 text-center">
                <h3 
                  className="text-lg font-extrabold uppercase text-[#F2B705] mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Atendimento Urgente
                </h3>
                <p className="text-xs text-gray-400 mb-4 font-semibold uppercase tracking-wider">
                  Retorno comercial em até 1 hora no horário de expediente
                </p>
                <Button 
                  onClick={() => openWhatsapp("Olá, preciso de atendimento urgente para toldos comerciais!")}
                  className="bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-[2px] cursor-pointer"
                >
                  WhatsApp Direto
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;