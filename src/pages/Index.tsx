import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Sparkles",
      title: "Химчистка салона",
      description: "Глубокая очистка всех поверхностей салона с использованием профессиональной химии"
    },
    {
      icon: "Droplets",
      title: "Мойка кузова",
      description: "Бесконтактная и ручная мойка премиум-класса с безопасными моющими средствами"
    },
    {
      icon: "Shield",
      title: "Защитные покрытия",
      description: "Нанесение керамических и полимерных покрытий для долговременной защиты ЛКП"
    },
    {
      icon: "Disc",
      title: "Полировка кузова",
      description: "Устранение царапин и восстановление блеска лакокрасочного покрытия"
    },
    {
      icon: "Wind",
      title: "Озонирование",
      description: "Устранение неприятных запахов и дезинфекция салона автомобиля"
    },
    {
      icon: "Car",
      title: "Комплексный детейлинг",
      description: "Полный спектр услуг: от химчистки до защиты кузова и салона"
    }
  ];

  const prices = [
    { category: "Седан", basic: "3 500", standard: "7 500", premium: "15 000" },
    { category: "Кроссовер", basic: "4 000", standard: "8 500", premium: "17 000" },
    { category: "Внедорожник", basic: "4 500", standard: "9 500", premium: "19 000" }
  ];

  const gallery = [
    { id: 1, title: "Полировка Porsche 911", image: "https://cdn.poehali.dev/projects/cdaade0e-66e8-4606-a153-de2ba9b63c1c/files/fb3f8817-2a7f-4b58-8c25-d875eb9b0661.jpg" },
    { id: 2, title: "Химчистка салона BMW X5", image: "https://cdn.poehali.dev/projects/cdaade0e-66e8-4606-a153-de2ba9b63c1c/files/09abd05c-842c-4cc0-b2b5-48cfc4a8c4dd.jpg" },
    { id: 3, title: "Керамика на Mercedes-Benz", image: "https://cdn.poehali.dev/projects/cdaade0e-66e8-4606-a153-de2ba9b63c1c/files/3d65e5a3-1e08-4a80-80d2-f779291adc29.jpg" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/32322.png" 
              alt="CT Detailing" 
              className="h-16 w-16"
            />
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Работы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Записаться
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Детейлинг - студия "CT Detailing"
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональный уход за вашим автомобилем. Возвращаем блеск и защищаем на долгие годы
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">О нас</h2>
              <p className="text-muted-foreground text-lg mb-4">
                CT Detailing — это команда профессионалов с многолетним опытом в сфере автомобильного детейлинга.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Мы используем только сертифицированные материалы от ведущих мировых производителей и современное оборудование, чтобы обеспечить максимальное качество обслуживания.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">7</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Гарантия качества</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Icon name="Car" size={120} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр детейлинг услуг для вашего автомобиля
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Цены</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачное ценообразование без скрытых платежей
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-4 gap-4 mb-4 font-semibold">
              <div className="text-muted-foreground">Класс авто</div>
              <div className="text-center">Базовый</div>
              <div className="text-center">Стандарт</div>
              <div className="text-center text-primary">Премиум</div>
            </div>
            {prices.map((price, index) => (
              <Card key={index} className="mb-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-semibold">{price.category}</div>
                    <div className="text-center">
                      <div className="text-xl font-bold">{price.basic} ₽</div>
                      <div className="text-xs text-muted-foreground">Мойка + пылесос</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold">{price.standard} ₽</div>
                      <div className="text-xs text-muted-foreground">+ химчистка</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{price.premium} ₽</div>
                      <div className="text-xs text-muted-foreground">Полный комплекс</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            * Точная стоимость рассчитывается индивидуально в зависимости от состояния автомобиля
          </p>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Примеры наших работ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Результаты, которыми мы гордимся
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Icon name="ZoomIn" size={40} className="text-white" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Запишитесь на услугу или задайте вопрос
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">Наши контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Телефон</div>
                    <div className="font-semibold">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-semibold">info@premium-detailing.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Адрес</div>
                    <div className="font-semibold">г. Москва, ул. Примерная, д. 1</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Clock" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Режим работы</div>
                    <div className="font-semibold">Ежедневно с 9:00 до 21:00</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="animate-scale-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Форма обратной связи</h3>
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Сообщение" 
                      rows={4}
                      className="bg-background"
                    />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 CT Detailing. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;