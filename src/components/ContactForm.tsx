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

    const message = `*Novo contato - Sul Toldos*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Email:* ${formData.email || "Não informado"}
*Serviço:* ${formData.service || "Não especificado"}
*Mensagem:* ${formData.message || "Não informada"}

_Enviado pelo site Sul Toldos_`;

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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Solicite um Orçamento</span> ou Tire suas Dúvidas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato conosco para toldos em Curitiba. Atendimento rápido e orçamento gratuito!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Solicitar Orçamento
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
                      <SelectItem value="toldo-lona">Toldo em Lona</SelectItem>
                      <SelectItem value="toldo-retratil">Toldo Retrátil</SelectItem>
                      <SelectItem value="cobertura-policarbonato">Cobertura em Policarbonato</SelectItem>
                      <SelectItem value="toldo-comercial">Toldo Comercial</SelectItem>
                      <SelectItem value="manutencao">Manutenção</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
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
                    placeholder="Descreva seu projeto ou dúvida..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                >
                  📱 Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Telefones</h4>
                      <p className="text-muted-foreground">(41) 3564-6943</p>
                      <p className="text-muted-foreground">(41) 99812-1324</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">E-mail</h4>
                      <p className="text-muted-foreground">contato@sultoldos.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Endereço</h4>
                      <p className="text-muted-foreground">
                        Rua Mandirituba, 1875<br />
                        CEP 81.925-540 - Curitiba/PR
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Horário de Atendimento</h4>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  🚀 Atendimento Rápido
                </h3>
                <p className="text-muted-foreground mb-4">
                  Respondemos em até 1 hora durante o horário comercial
                </p>
                <Button 
                  onClick={() => openWhatsapp("Olá, preciso de atendimento urgente para toldos!")}
                  className="bg-primary hover:bg-primary/90"
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