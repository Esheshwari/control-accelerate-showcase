import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from 'emailjs-com';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactFormModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  productName?: string;
}

const ContactFormModal = ({ open, setOpen, productName }: ContactFormModalProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: productName || "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_gtuexis';
      const templateId = 'template_q5nl2za';
      const publicKey = 'FfGvxREdE92gMo69h';

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        product: form.product,
        message: form.message,
        to_email: 'shapersindustrial@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success("Thank you! Your enquiry has been submitted. We will contact you shortly.");
      setForm({ name: "", email: "", phone: "", product: productName || "", message: "" });
      setOpen(false);
    } catch (error) {
      console.error('Email send error:', error);
      toast.error("Failed to send enquiry. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Get In Touch</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="product">Product</Label>
              <Input
                id="product"
                name="product"
                value={form.product}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </Button>
        </form>
        <div className="mt-6 pt-4 border-t">
          <h4 className="font-semibold mb-2">Contact Information</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 95704 05891 / 99313 78518 / 89879 16181
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              info@controlandaccelerate.com
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4" />
              Registered Office Address :- 515, Industrial Area, Bahuarwa, Near Ashoka Pillar, Lauria, West Champaran, Bihar - India
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;