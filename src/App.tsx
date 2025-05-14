import React, { useState, useEffect } from 'react';
import { Scroll, Shield, Star, Sun, Timer, Trophy, Users, Zap } from 'lucide-react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }; // Reset timer
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <span className="text-red-400 font-bold">
      {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
    </span>
  );
}

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Sales Stats Header */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-3 px-4 sticky top-0 z-50 border-b-2 border-red-700 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full animate-pulse">
              <Users className="w-5 h-5 text-red-400" />
              <p className="font-bold text-base md:text-lg">
                <span className="text-red-400">ALERTA:</span> Apenas <span className="text-red-400">4%</span> das vagas disponíveis!
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-red-400" />
                <p className="text-sm md:text-base">
                  <span className="text-red-400 font-bold">2,487</span> homens transformados
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 bg-red-950 px-4 py-2 rounded-full">
                <Timer className="w-5 h-5 text-red-400" />
                <p className="text-sm">
                  Oferta expira em <CountdownTimer />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="bg-red-900/20 p-4 rounded-lg mb-8 animate-pulse">
          <p className="text-red-400 font-bold">🔥 ATENÇÃO: Apenas 12 vagas restantes para hoje!</p>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
          Antiga Técnica Oriental de 2.500 Anos Revelada: O Segredo dos Monges para Manter a Vitalidade após os 40
        </h1>
        <p className="text-xl md:text-2xl text-red-500 mb-8 max-w-2xl mx-auto">
          Método 100% natural restaura sua energia vital em apenas 7 dias - Usado por mestres orientais por gerações
        </p>
        <div className="relative w-full max-w-4xl mx-auto aspect-video mb-8 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/JX8Uh2jpbxM?autoplay=1&mute=1&rel=0" 
            title="Técnica Oriental Revelada" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
          <div className="absolute bottom-4 left-4 z-20 bg-red-600 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
            Assista Agora!
          </div>
        </div>
        <div className="space-y-4">
          <a 
            href="https://go.disruptybr.click/9mcbvxrlbw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg shadow-red-600/50"
          >
            QUERO CONHECER O SEGREDO DOS MONGES
          </a>
          <p className="text-red-400 text-sm">
            ⚡ 87% dos homens relatam resultados na primeira semana!
          </p>
        </div>
      </header>

      {/* Trust Indicators */}
      <div className="bg-black py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-5 h-5 text-red-500" />
            <span className="text-sm">100% Seguro</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Timer className="w-5 h-5 text-red-500" />
            <span className="text-sm">7 Dias de Resultados</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Users className="w-5 h-5 text-red-500" />
            <span className="text-sm">2,487+ Satisfeitos</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5 text-red-500" />
            <span className="text-sm">Método Premiado</span>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Benefícios Comprovados por Gerações</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard
            icon={<Zap className="w-12 h-12 text-red-500" />}
            title="Energia Restaurada"
            description="Recupere sua vitalidade natural usando técnicas milenares"
          />
          <BenefitCard
            icon={<Sun className="w-12 h-12 text-red-500" />}
            title="Força Interior"
            description="Desperte seu potencial adormecido através de práticas ancestrais"
          />
          <BenefitCard
            icon={<Star className="w-12 h-12 text-red-500" />}
            title="Confiança Total"
            description="Sinta-se renovado e confiante em todas as situações"
          />
          <BenefitCard
            icon={<Timer className="w-12 h-12 text-red-500" />}
            title="Resultados Rápidos"
            description="Perceba as mudanças em apenas 7 dias de prática"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Histórias de Transformação</h2>
          <p className="text-red-500 text-xl">98% de aprovação entre nossos alunos!</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            image="https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg"
            name="Carlos, 45 anos"
            text="'Depois de conhecer esta técnica milenar, minha energia vital mudou completamente. Me sinto 20 anos mais jovem!'"
          />
          <TestimonialCard
            image="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg"
            name="Roberto, 52 anos"
            text="'Impressionante como práticas tão antigas podem ter um efeito tão poderoso. Minha vitalidade está em outro nível.'"
          />
          <TestimonialCard
            image="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg"
            name="João, 48 anos"
            text="'Em apenas 7 dias seguindo o método, percebi uma diferença incrível na minha energia diária.'"
          />
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-red-900 to-red-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full mb-8 animate-pulse">
            🎁 BÔNUS ESPECIAL - TEMPO LIMITADO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Bônus Exclusivo</h2>
          <div className="bg-black p-8 rounded-lg border-2 border-red-500">
            <h3 className="text-2xl font-bold mb-4">Manual Secreto: 7 Técnicas Ancestrais</h3>
            <p className="text-xl mb-4">
              <span className="line-through text-gray-500">Valor: R$497,00</span>
              <span className="block text-red-500 font-bold mt-2">GRÁTIS para os primeiros 50 inscritos!</span>
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Scroll className="w-16 h-16 text-red-500" />
            </div>
            <div className="bg-red-900/30 p-4 rounded-lg mb-8">
              <p className="text-red-500 font-bold animate-pulse">
                ⏰ Disponível apenas nas próximas 24 horas!
              </p>
            </div>
            <a 
              href="https://go.disruptybr.click/9mcbvxrlbw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg shadow-red-600/50"
            >
              QUERO GARANTIR MEU BÔNUS AGORA!
            </a>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-20 h-20 text-red-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Garantia Total de 90 Dias</h2>
          <div className="bg-red-900/20 p-8 rounded-lg mb-8">
            <p className="text-xl mb-8">
              Se você não ficar 100% satisfeito com os resultados, devolvemos seu investimento integralmente.
              <span className="block text-red-500 mt-4">Sem perguntas. Sem burocracia.</span>
            </p>
          </div>
          <a 
            href="https://go.disruptybr.click/9mcbvxrlbw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg shadow-red-600/50"
          >
            QUERO RECUPERAR MINHA FORÇA VITAL AGORA!
          </a>
          <p className="mt-4 text-red-400 text-sm">
            🔒 Pagamento 100% Seguro | Satisfação Garantida
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
          <div className="space-y-8">
            <FaqItem
              question="Quanto tempo leva para ver resultados?"
              answer="A maioria dos praticantes relata mudanças significativas em 7 dias de prática constante."
            />
            <FaqItem
              question="Esta técnica é realmente segura?"
              answer="Sim, são práticas naturais usadas há mais de 2.500 anos por mestres orientais."
            />
            <FaqItem
              question="Preciso de experiência prévia?"
              answer="Não, o método foi desenvolvido para iniciantes e inclui orientação completa."
            />
            <FaqItem
              question="Quanto tempo preciso dedicar por dia?"
              answer="Apenas 15 minutos diários são suficientes para obter resultados."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-r from-red-900 to-red-950">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="bg-black/30 p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Não Perca Mais Tempo! Apenas 12 Vagas Restantes
            </h2>
            <p className="text-red-400 mb-8">
              ⚡ Bônus especial disponível apenas hoje!
            </p>
            <a 
              href="https://go.disruptybr.click/9mcbvxrlbw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg shadow-red-600/50"
            >
              QUERO TRANSFORMAR MINHA VIDA AGORA!
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 text-center text-sm text-gray-500">
        <p>© 2024 Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg text-center border border-red-900 hover:border-red-500 transition-colors">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function TestimonialCard({ image, name, text }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-red-900 hover:border-red-500 transition-colors">
      <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
      <p className="text-gray-300 text-center italic">{text}</p>
    </div>
  );
}

function FaqItem({ question, answer }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-red-900 hover:border-red-500 transition-colors">
      <h3 className="text-xl font-bold mb-2">{question}</h3>
      <p className="text-gray-300">{answer}</p>
    </div>
  );
}

export default App;