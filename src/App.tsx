import { MessageCircle, CheckCircle, Truck, Clock, Shield, CreditCard, Users, MapPin } from 'lucide-react';

function App() {
  const whatsappNumber = '5511965157358';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais sobre o Tag Sem Parar.`;

  const benefits = [
    {
      icon: Clock,
      title: 'Economia de Tempo',
      description: 'Passe direto pelos pedágios sem precisar parar ou pegar filas'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Sistema confiável e seguro para seu veículo e sua família'
    },
    {
      icon: CreditCard,
      title: 'Facilidade de Pagamento',
      description: 'Pagamento automático vinculado ao seu cartão de crédito'
    },
    {
      icon: Truck,
      title: 'Para Todos os Veículos',
      description: 'Motos, carros, caminhões e frotas empresariais'
    }
  ];

  const plans = [
    {
      name: 'Individual',
      price: 'R$ 9,90',
      period: '/mês',
      features: [
        'Tag para 1 veículo',
        'Cobrança mensal',
        'Suporte por WhatsApp',
        'App para gestão',
        'Relatórios de uso'
      ],
      highlighted: false
    },
    {
      name: 'Família',
      price: 'R$ 24,90',
      period: '/mês',
      features: [
        'Tags para até 3 veículos',
        'Cobrança mensal unificada',
        'Suporte prioritário',
        'App para gestão',
        'Relatórios detalhados',
        'Desconto progressivo'
      ],
      highlighted: true
    },
    {
      name: 'Empresarial',
      price: 'Sob consulta',
      period: '',
      features: [
        'Tags ilimitadas',
        'Gestão de frotas',
        'Relatórios personalizados',
        'Suporte 24/7',
        'Integração com sistemas',
        'Consultor dedicado'
      ],
      highlighted: false
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Motorista Executivo',
      content: 'Economizo pelo menos 30 minutos por dia não precisando parar nos pedágios. Serviço excelente!'
    },
    {
      name: 'Maria Oliveira',
      role: 'Empresária',
      content: 'Para minha frota de veículos, o Tag Sem Parar é essencial. Facilita muito a gestão e controle de custos.'
    },
    {
      name: 'João Santos',
      role: 'Representante Comercial',
      content: 'Viajo muito e o Tag Sem Parar tornou minha vida muito mais prática. Recomendo!'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-pink-400 to-pink-500 text-white sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold">TAG SEM PARAR</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#sobre" className="hover:text-pink-100 transition-colors">Sobre</a>
              <a href="#beneficios" className="hover:text-pink-100 transition-colors">Benefícios</a>
              <a href="#planos" className="hover:text-pink-100 transition-colors">Planos</a>
              <a href="#contato" className="hover:text-pink-100 transition-colors">Contato</a>
            </nav>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/sss.png"
            alt="Tag Sem Parar - Caminho Livre"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Caminho Livre Para o Seu Negócio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Passe direto pelos pedágios e economize tempo e dinheiro
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center"
              >
                <MessageCircle className="mr-2" size={24} />
                Solicite seu TAG
              </a>
              <a
                href="#planos"
                className="bg-white hover:bg-gray-100 text-pink-600 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center"
              >
                Ver Planos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              O que é o Tag Sem Parar?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              O Tag Sem Parar é o sistema de pagamento automático de pedágios mais moderno e eficiente do Brasil.
              Com nossa tecnologia, você passa direto pelas cancelas sem precisar parar, economizando tempo
              e combustível. Ideal para motoristas particulares, profissionais e empresas com frotas.
            </p>
          </div>
        </div>
      </section>

      <section id="beneficios" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Vantagens do Tag Sem Parar
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Descubra como o Tag Sem Parar pode transformar sua experiência nas estradas
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="text-pink-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-50 to-pink-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Como Funciona
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Solicite seu TAG
                </h3>
                <p className="text-gray-600">
                  Entre em contato pelo WhatsApp e solicite seu adesivo TAG
                </p>
              </div>
              <div className="text-center">
                <div className="bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Instale no Veículo
                </h3>
                <p className="text-gray-600">
                  Cole o TAG no para-brisa seguindo as instruções fornecidas
                </p>
              </div>
              <div className="text-center">
                <div className="bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Passe Direto
                </h3>
                <p className="text-gray-600">
                  Pronto! Passe direto pelos pedágios sem precisar parar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="planos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Escolha o Melhor Plano
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Temos opções para todos os perfis, desde motoristas individuais até grandes frotas
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-900 shadow-lg'
                } border-2 ${plan.highlighted ? 'border-pink-500' : 'border-gray-200'}`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      MAIS POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-lg ${plan.highlighted ? 'text-gray-200' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle
                        className={`mr-3 flex-shrink-0 ${
                          plan.highlighted ? 'text-green-400' : 'text-green-500'
                        }`}
                        size={20}
                      />
                      <span className={plan.highlighted ? 'text-gray-100' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-6 rounded-lg font-bold text-center transition-all ${
                    plan.highlighted
                      ? 'bg-white text-pink-600 hover:bg-gray-100'
                      : 'bg-pink-500 text-white hover:bg-amber-900'
                  }`}
                >
                  Contratar Agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Milhares de motoristas já confiam no Tag Sem Parar
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-4">
                  <Users className="text-pink-600 mr-2" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 bg-gradient-to-br from-pink-500 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="mx-auto mb-6 text-pink-100" size={64} />
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Entre em contato conosco pelo WhatsApp e garanta seu Tag Sem Parar hoje mesmo!
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            <MessageCircle className="mr-3" size={28} />
            Falar com Especialista
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Tag Sem Parar</h3>
              <p className="text-gray-400">
                O sistema mais moderno e eficiente de pagamento automático de pedágios do Brasil.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
              <p className="text-gray-400 mb-2">
                WhatsApp: (11) 96515-7358
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="mr-2" size={18} />
                Fale conosco agora
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Tag Sem Parar. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all hover:scale-110 z-50 animate-pulse"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

export default App;
