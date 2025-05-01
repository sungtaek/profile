import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { User, Mail, Loader2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileData } from "@/data/profileData";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "이름은 최소 2글자 이상이어야 합니다." }),
  email: z.string().email({ message: "유효한 이메일 주소를 입력해주세요." }),
  message: z.string().min(10, { message: "메시지는 최소 10글자 이상이어야 합니다." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "메시지 전송 완료",
        description: "이성택님에게 메시지가 전송되었습니다. 감사합니다.",
      });
      reset();
    } catch (error) {
      toast({
        title: "메시지 전송 실패",
        description: "메시지 전송에 실패했습니다. 다시 시도해 주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          연락처
        </motion.h2>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-white text-gray-900">
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-primary">기본 정보</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <User className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">이름</p>
                      <p>{profileData.name}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">이메일</p>
                      <p>{profileData.email}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaGithub className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {profileData.github}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Contact Form */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-primary">메시지 보내기</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <Label htmlFor="name" className="mb-2">이름</Label>
                    <Input 
                      id="name" 
                      {...register("name")} 
                      placeholder="이름을 입력하세요" 
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="email" className="mb-2">이메일</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      {...register("email")} 
                      placeholder="이메일을 입력하세요" 
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="message" className="mb-2">메시지</Label>
                    <Textarea 
                      id="message" 
                      {...register("message")} 
                      rows={4} 
                      placeholder="메시지를 입력하세요" 
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        전송 중...
                      </>
                    ) : (
                      "보내기"
                    )}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
