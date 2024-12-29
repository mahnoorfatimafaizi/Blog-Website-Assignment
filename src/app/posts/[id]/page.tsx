"use client";
import Menu from "@/components/Menu";
import Image from "next/image";
import { useParams } from "next/navigation";
import Comment from "@/components/Comment";

const posts = [
  {
    id: "1",
    title: "AI Takes Center Stage: How 2024 Is Shaping the Tech Landscape",
    description:
      "Explore 2024's tech revolution, where AI breakthroughs, quantum computing, and sustainable innovations are reshaping the future of technology.",
    date: "26.12.2024",
    category: "Technology",
    image: "/images/tech01.png",

    content:
      "The tech world in 2024 is buzzing with transformative innovations, and AI is leading the charge. OpenAI’s new multi-modal models are breaking barriers, enabling seamless interaction across text, images, and code. Meanwhile, Japan has announced its ambitious plans for a fully automated smart city prototype by 2026, blending robotics and IoT technologies. On the hardware front, the rise of quantum computing chips has sparked a race among global tech giants to achieve quantum supremacy. In cybersecurity, decentralized AI is making strides in tackling ransomware attacks. Sustainable tech is also gaining momentum, with companies investing heavily in carbon-neutral server farms. Finally, the rise of AI-generated content is raising important discussions about creativity and ethics in the digital age. The future is unfolding faster than ever, and the possibilities seem limitless. Stay tuned for more updates!",
  },
  {
    id: "2",
    title: "Next.js 15: The Future of Server-Side Rendering",
    description:
      "Next.js 15 brings several exciting new features, enhancing server-side rendering and improving performance. The latest update makes building web applications faster and more scalable than ever",
    date: "24.12.2024",
    category: "Web Development",
    image: "/images/webdev01.png",

    content:
      "Next.js 15 introduces significant improvements to server-side rendering (SSR), making it even more efficient and scalable. With automatic static optimization and improved caching, the latest release allows developers to build faster, more responsive web applications. The introduction of middleware in Next.js 15 allows for better handling of requests, reducing server load and increasing performance. This update also enhances React support with faster rendering times and better compatibility with React Server Components. Developers can now take advantage of incremental static regeneration (ISR) for more dynamic and personalized content delivery. This is a game-changer for building SEO-friendly applications with fast load times. Additionally, Next.js 15 simplifies routing with automatic path detection, making it easier for developers to manage complex routes.",
  },
  {
    id: "3",
    title: "The Power of Small Wins: Building Momentum in Your Daily Routine",
    description:
      "Achieving big goals often starts with small wins. By focusing on daily accomplishments, you can build lasting momentum that propels you toward success.",
    date: "23.12.2024",
    category: "Self Motivation",
    image: "/images/selfmoti01.png",

    content:
      "Success doesn’t happen overnight—it’s built from a series of small wins. Whether it’s completing a task, learning something new, or simply sticking to your routine, these small victories add up over time. When you celebrate even minor achievements, you reinforce the habit of progress and build momentum. This positive reinforcement encourages you to push forward, even when the bigger goals seem distant. By focusing on what you can control each day, you stay motivated and keep making progress toward your long-term aspirations. Breaking down big goals into smaller, actionable steps is key to maintaining focus and avoiding overwhelm. Remember, each small win is a step closer to your ultimate success.",
  },
  {
    id: "4",
    title: "Mastering Time Management for Effective Learning",
    description:
      "Time management is essential for successful learning. Discover techniques that will help you make the most of your study time and boost your learning efficiency.",
    date: "21.12.2024",
    category: "Learning",
    image: "/images/learn01.png",

    content:
      "Effective time management is crucial for balancing learning with other commitments. To maximize productivity, it’s important to prioritize tasks and set realistic goals. One proven technique is the Pomodoro Technique, which involves studying in 25-minute intervals followed by a short break. This approach enhances focus and prevents burnout. Another method is the time-blocking technique, where you dedicate specific hours to specific tasks. Creating a structured schedule not only helps you stay organized but also ensures you allocate enough time for rest and reflection. By using these techniques, learners can improve their focus, stay on track, and avoid procrastination. Mastering time management ultimately leads to better retention and a more efficient learning process.",
  },
  {
    id: "5",
    title: "The Rise of Quantum Computing: A Glimpse into the Future",
    description:
      "Quantum computing is pushing the boundaries of what’s possible in technology, offering solutions to problems that classical computers can’t solve. As research progresses, its real-world applications are becoming clearer.",
    date: "20.12.2024",
    category: "Technology",
    image: "/images/tech02.png",
    content:
      "Quantum computing is evolving at an impressive pace, with tech giants investing in cutting-edge quantum chips that could revolutionize industries. Unlike traditional computers that process data in binary, quantum systems use qubits, which can exist in multiple states simultaneously. This enables them to solve complex problems at speeds unimaginable for classical computers. The most significant breakthroughs are in areas like cryptography, material science, and optimization problems, promising faster and more secure solutions. However, challenges remain, including quantum error correction and scalability. As companies race to achieve quantum supremacy, practical applications like AI training and logistics optimization are becoming more accessible. The race for quantum computers will have a profound impact on cybersecurity, and its potential is only just beginning to be explored.",
  },
  {
    id: "6",
    title: "Decentralized AI: The Future of Cybersecurity",
    description:
      "Decentralized AI is transforming cybersecurity by creating systems that are not reliant on central authorities, offering new ways to combat cyber threats. This technology is paving the way for a more secure digital world.",
    date: "20.12.2024",
    category: "Technology",
    image: "/images/tech03.png",
    content:
      "As cyber threats continue to evolve, traditional centralized AI systems are becoming less effective at combating complex, distributed attacks. Enter decentralized AI—a system where machine learning models are distributed across multiple nodes instead of relying on a central server. This creates a more resilient network that is harder to compromise. By decentralizing AI, cybersecurity experts are able to create more robust threat detection systems, such as those that can spot patterns in large data sets or detect intrusions in real-time. The key benefit is that these decentralized systems can be more adaptive and quicker to respond to emerging threats. As the technology matures, it's expected to help secure everything from personal devices to enterprise networks, making the digital world safer.",
  },
  {
    id: "7",
    title: "Tailwind CSS: The Ultimate Utility-First Framework",
    description:
      " Tailwind CSS has become a staple for modern web development, enabling developers to build responsive, aesthetically pleasing websites with ease. Here’s why it’s gaining so much traction.",
    date: "18.12.2024",
    category: "Web Development",
    image: "/images/webdev02.png",
    content:
      "Tailwind CSS is transforming the way developers approach styling, with its utility-first philosophy. Instead of writing custom CSS for every component, Tailwind allows you to use pre-defined utility classes that can be applied directly in the HTML. This reduces the need for maintaining long, complex CSS files and speeds up development time. One of its standout features is the highly customizable configuration file, which lets developers tailor the design system to meet specific project needs. Additionally, with its mobile-first approach, Tailwind makes responsive web design a breeze. It’s easy to tweak layouts at different breakpoints with its comprehensive set of responsive utilities. The integration of plugins like typography and forms makes it a versatile choice for building modern, maintainable websites.",
  },
  {
    id: "8",
    title: "Design Systems: The Secret to Consistent UI/UX",
    description:
      " A well-structured design system can revolutionize your web development workflow. Here’s why it’s a must-have.",
    date: "27.12.2024",
    category: "Web Development",
    image: "/images/webdev03.png",
    content:
      "Design systems provide a unified approach to UI/UX by combining reusable components, typography, and color schemes. Frameworks like Material Design and Fluent UI offer pre-built systems, saving time and ensuring consistency across projects. Developers and designers work more efficiently when they share a common language through design tokens and documentation. Design systems also make scaling your application seamless by maintaining visual and functional consistency. By implementing a design system, teams can streamline development, reduce redundancy, and deliver polished user experiences faster than ever.",
  },
  {
    id: "9",
    title: "Embracing Lifelong Learning in a Rapidly Changing World",
    description:
      "In today’s fast-paced world, continuous learning is essential to stay relevant. Embracing lifelong learning opens doors to personal and professional growth.",
    date: "16.12.2024",
    category: "Learning",
    image: "/images/learn02.png",
    content:
      "The world is changing faster than ever, and the skills that were once relevant can quickly become obsolete. Lifelong learning is the key to staying ahead in a rapidly evolving job market. Whether you’re learning a new language, acquiring technical skills, or exploring creative hobbies, the pursuit of knowledge doesn’t stop after formal education. Online platforms, such as MOOCs (Massive Open Online Courses), make it easier than ever to access resources and learn new skills from the comfort of your home. By committing to lifelong learning, you not only enhance your career prospects but also stay mentally sharp and adaptable. This mindset encourages you to embrace challenges, stay curious, and continue growing throughout your life, regardless of age or career stage.",
  },
  {
    id: "10",
    title: "The Power of Active Learning: How to Retain More Information",
    description:
      "Active learning is transforming the way we approach education. By engaging directly with the material, students can retain more information and enhance their understanding.",
    date: "15.12.2024",
    category: "Learning",
    image: "/images/learn03.png",
    content:
      "Active learning emphasizes student engagement through hands-on methods, such as problem-solving, discussions, and collaborative projects. This approach is far more effective than passive learning, where students simply listen to lectures or read texts. When learners actively participate, they are more likely to understand and retain the material. Techniques like teaching others, creating mind maps, or using spaced repetition can help solidify knowledge. Research has shown that active learning improves critical thinking and allows learners to apply concepts to real-world scenarios. By focusing on engagement and deeper comprehension, active learning empowers students to take control of their education and achieve better outcomes. Whether in a classroom or online setting, active learning fosters long-term retention and application of knowledge.",
  },
  {
    id: "11",
    title: "Mastering the Art of Focus: Eliminating Distractions for Success",
    description:
      " Distractions are one of the biggest barriers to productivity. Learn how mastering focus can help you achieve your goals faster and with more efficiency.",
    date: "14.12.2024",
    category: "Self Motivation",
    image: "/images/selfmoti02.png",
    content:
      "In a world full of distractions, staying focused is a skill that can set you apart. Whether it’s social media, emails, or environmental noise, distractions derail our productivity and make it harder to reach our goals. To master focus, it’s essential to create a structured environment that minimizes these distractions. One powerful technique is time-blocking, where you allocate specific hours of the day to certain tasks. This method helps you stay dedicated to a single project without the temptation of multitasking. Another strategy is the Pomodoro Technique, which involves working in 25-minute intervals followed by short breaks. By actively managing your environment and time, you can significantly increase your ability to focus and get more done in less time.",
  },
  {
    id: "12",
    title: "The Role of Positive Self-Talk in Achieving Your Goals",
    description:
      "Positive self-talk can be a game-changer in overcoming self-doubt and achieving your dreams. Here’s how to use affirmations to stay motivated and focused.",
    date: "13.12.2024",
    category: "Self Motivation",
    image: "/images/selfmoti03.png",
    content:
      "Our inner dialogue has a powerful impact on our mindset and actions. Negative self-talk can hold us back, feeding doubts and fears, while positive affirmations can propel us forward. By consciously changing the way we speak to ourselves, we can shift our perspective and boost our confidence. Start by recognizing negative thoughts and replacing them with positive, empowering statements. For example, instead of thinking “I can’t do this,” say “I am capable of overcoming challenges.” Regularly practicing positive self-talk helps rewire your brain to focus on your strengths and abilities. This shift in mindset can significantly enhance your motivation and resilience, making it easier to tackle obstacles and stay committed to your goals.",
  },
];

const SinglePage = () => {
  const params = useParams();
  const { id } = params;

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div className="container">
      <div className="flex items-center gap-[50px]">
        <div className="flex-1">
          <h1 className="text-[44px] mb-[50px] md:text-[54px] lg:text-[48px] sm:text-[36px]">
            {post.title}
          </h1>
          <div className="flex items-center gap-[20px]">
            <div className="flex flex-col gap-[5px] text-softTextColor">
              <span className="date">{post.date}</span>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[400px] relative hidden md:flex">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="image object-cover"
          />
        </div>
      </div>
      <div className="flex-1 h-[400px] relative md:hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="image object-cover"
        />
      </div>
      <div className="flex gap-[50px]">
        <div className="flex-[5] mt-[60px]">
          <div className="text-[20px] font-light sm:text-[18px]">
            <p className="mb-[20px]">{post.content}</p>
          </div>

          <div className="comments">
            <Comment />
          </div>
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
