import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    petType: "",
    message: ""
  });

  const services = [
    {
      icon: "Stethoscope",
      title: "Терапия",
      description: "Диагностика и лечение заболеваний, профилактические осмотры"
    },
    {
      icon: "Scissors",
      title: "Хирургия",
      description: "Плановые и экстренные операции любой сложности"
    },
    {
      icon: "Syringe",
      title: "Вакцинация",
      description: "Полный спектр прививок для защиты здоровья питомца"
    },
    {
      icon: "TestTube",
      title: "Анализы",
      description: "Лабораторные исследования крови, мочи и других материалов"
    },
    {
      icon: "Smile",
      title: "Стоматология",
      description: "Лечение зубов, удаление зубного камня, профилактика"
    },
    {
      icon: "Sparkles",
      title: "Груминг",
      description: "Стрижка, купание, уход за шерстью и когтями"
    },
    {
      icon: "CircuitBoard",
      title: "Чипирование",
      description: "Установка электронного чипа для идентификации питомца"
    },
    {
      icon: "Home",
      title: "Вызов на дом",
      description: "Приезд ветеринара к вам домой в удобное время"
    }
  ];

  const doctors = [
    {
      name: "Анна Петрова",
      specialty: "Главный врач, хирург",
      experience: "15 лет опыта",
      description: "Специализация: сложные хирургические операции"
    },
    {
      name: "Михаил Соколов",
      specialty: "Терапевт, диагност",
      experience: "10 лет опыта",
      description: "Специализация: внутренние болезни, УЗИ-диагностика"
    },
    {
      name: "Елена Иванова",
      specialty: "Стоматолог",
      experience: "8 лет опыта",
      description: "Специализация: лечение и профилактика заболеваний полости рта"
    }
  ];

  const reviews = [
    {
      author: "Мария С.",
      pet: "Кот Барсик",
      text: "Барсик очень нервничает у врачей, но здесь к нему нашли подход. Врачи терпеливые, всё объясняют. Очень благодарна!",
      rating: 5
    },
    {
      author: "Дмитрий К.",
      pet: "Собака Рекс",
      text: "Делали сложную операцию. Всё прошло отлично, Рекс быстро восстановился. Профессионалы своего дела!",
      rating: 5
    },
    {
      author: "Ольга Н.",
      pet: "Кошка Муся",
      text: "Приятная атмосфера, чистота, современное оборудование. Мусе сделали все прививки и чипирование. Рекомендую!",
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Heart" size={28} className="text-primary" />
            <span className="text-xl font-bold">Мокрый Нос</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#doctors" className="text-sm hover:text-primary transition-colors">Врачи</a>
            <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button size="sm" className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (343) 555-12-34
          </Button>
        </div>
      </header>

      <main className="pt-16">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(250, 249, 246, 0.92), rgba(250, 249, 246, 0.92)), url('https://cdn.poehali.dev/projects/5a584767-a6fe-43ca-ad86-5288eb4a520f/files/819566c8-5d3c-440a-8f21-58d4bc390c2e.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Забота с наукой<br />и сердцем
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Современная ветеринарная клиника в Екатеринбурге. 7 лет заботимся о здоровье ваших питомцев с профессионализмом и любовью.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на приём
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (343) 555-12-34
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Полный спектр ветеринарной помощи для ваших любимцев
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon name={service.icon as any} size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="doctors" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши врачи</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Команда опытных специалистов с любовью к животным
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {doctors.map((doctor, index) => (
                <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <CardContent className="p-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 mx-auto">
                      <Icon name="UserRound" size={40} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-1">{doctor.name}</h3>
                    <p className="text-sm text-primary text-center mb-2">{doctor.specialty}</p>
                    <p className="text-xs text-muted-foreground text-center mb-3">{doctor.experience}</p>
                    <p className="text-sm text-center">{doctor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Что говорят о нас владельцы питомцев
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm mb-4 italic">"{review.text}"</p>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="User" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{review.author}</p>
                        <p className="text-xs text-muted-foreground">{review.pet}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Записаться на приём</h2>
                <p className="text-muted-foreground">
                  Оставьте заявку, и мы свяжемся с вами в ближайшее время
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="animate-fade-in">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input 
                          placeholder="Ваше имя" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Input 
                          placeholder="Телефон" 
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Input 
                          placeholder="Тип питомца (кошка, собака, и т.д.)" 
                          value={formData.petType}
                          onChange={(e) => setFormData({...formData, petType: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Textarea 
                          placeholder="Опишите причину обращения" 
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="MapPin" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Адрес</h3>
                          <p className="text-sm text-muted-foreground">г. Екатеринбург, ул. Ленина, д. 123</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="Phone" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Телефон</h3>
                          <p className="text-sm text-muted-foreground">+7 (343) 555-12-34</p>
                          <p className="text-xs text-muted-foreground mt-1">Ежедневно 8:00 — 21:00</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="Mail" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <p className="text-sm text-muted-foreground">info@mokriynos.ru</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-foreground/5 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Heart" size={24} className="text-primary" />
              <span className="font-semibold">Ветеринарная клиника «Мокрый Нос»</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Мокрый Нос. 7 лет заботы о ваших питомцах
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}