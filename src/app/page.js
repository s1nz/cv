import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-4 lg:px-16 lg:py-12 rounded-lg max-w-[1200px]">
      <div className="flex mb-16">
        <div className="w-2/3">
          <h1 className="text-xl font-bold mb-1">
           Andrii Poplavskyi
          </h1>
          <p className="text-base text-gray-500 mb-1">
            Front-end Developer
          </p>
          <p className="mb-8">
            Focused on UI/UX, performance, and accessibility.
          </p>
          <p className="font-mono text-sm">
            <a href="mailto:a.poplavskij@gmail.com">a.poplavskij@gmail.com</a>
            <span className="mx-2 text-gray-500">&bull;</span>
            <a href="tel:+410774170111">+410774170111</a>
            <span className="mx-2 text-gray-500">&bull;</span>
            Uster, Switzerland
          </p>
        </div>
      </div>
      <div className="lg:flex">
        <section className="lg:pr-20 lg:w-2/3">
          <section className="mb-8 text-sm">
            <p className="font-bold text-base">Skills</p>
            <p className="text-balance">JavaScript, frameworks (Vue, React, Nuxt.js), Ecommerce, PHP, Magento, Symfony, Headless, HTML, CSS, Ul libraries (Ant Design), preprocessors (SASS, LESS), Webpack, Git, REST, web standards, accessibility standards, responsive and mobile design</p>
          </section>
          <article className="mb-8">
            <h2 className=""><strong className="font-semibold">DRINKS | Silverbogen AG</strong>, Zürich — <strong className="semibold">Lead Front-end developer</strong></h2>
            <p className="text-gray-500 mb-4 text-sm">08/2019 – present</p>
            <p className="text-gray-500 mb-4 text-sm"></p>
            <ul className="list-disc pl-4 text-sm">
              <li className="mb-2">Design and launch the new website leading to higher customer satisfaction and driving up the sales.</li>
              <li className="mb-2">In collaboration with team developed and integrated custom headless frontend to simplify development and boosting Magento performance, improving SEO and user engagement.</li>
              <li className="mb-2">Successfully transitioned the website from Magento 1 to Magento 2, improving stability and security of the website.</li>
              <li className="mb-2">Developed, integrated, supported multiple in-house applications to support business processes, creating more opportunities for business growth.</li>
              <li className="mb-2">Leading a small team of developers.</li>
              <li className="mb-2">Developed and maintained the Market Intelligence Hub, a comprehensive tool providing 360° transparency on products, customers, and pricing for brands.</li>
              <li className="mb-2">Led the design and implementation of an intuitive dashboard to give users easy access to sales, pricing, and marketing data.</li>
              <li className="mb-2">Engineered features for real-time customer insights, enabling clients to analyze buyer behavior and sales drivers.</li>
              <li className="mb-2">Implemented product benchmarking tools to compare performance with market leaders, identifying strengths and areas for improvement.</li>
              <li className="mb-2">Created dynamic pricing analysis modules to monitor and compare product prices across different European markets.</li>
              <li className="mb-2">Collaborated with cross-functional teams to ensure seamless integration and optimal performance of all internal tools and features.</li>
            </ul>
          </article>
          <article>
            <h2 className=""><strong className="font-semibold">Liip AG</strong>, Zürich — <strong className="semibold">Software Developer; Front-end Developer</strong></h2>
            <p className="text-gray-500 mb-4 text-sm">08/2015 – 08/2019</p>
            <ul className="list-disc pl-4 text-sm">
              <li className="mb-2">Development and maintenance of front-end web applications, ecommerce websites, hybrid apps, and a product listing website for the largest retail company in Switzerland</li>
              <li className="mb-2">Streamlined the process of updating information in the app from weeks to hours, significantly improving efficiency and user experience, reducing costs and time to deploying new content.</li>
              <li className="mb-2">Collaborated closely with UX teams to design and implement user-friendly and accessible websites</li>
              <li className="mb-2">Played a key role in simplifying the overall process and enhancing the brand's digital presence.</li>
            </ul>
          </article>
          <article>
            <h2 className=""><strong className="font-semibold">Eltrino LLC</strong>, Kyiv — <strong className="semibold">Front-end Developer</strong></h2>
            <p className="text-gray-500 mb-4 text-sm">11/2013 – 08/2015</p>
          </article>
          <article>
            <h2 className=""><strong className="font-semibold">eBay (X.Commerce)</strong>, Kyiv — <strong className="semibold">Front-end Developer</strong></h2>
            <p className="text-gray-500 mb-4 text-sm">08/2011 – 11/2013</p>
          </article>
          <article>
            <h2 className=""><strong className="font-semibold">Magento</strong>, Kyiv — <strong className="semibold">Front-end Developer</strong></h2>
            <p className="text-gray-500 mb-4 text-sm">02/2010 – 08/2011</p>
          </article>
        </section>
        <aside className="lg:w-1/3 text-sm">
          <section className="mb-8 text-sm">
            <p className="font-bold text-base">Education</p>
            <p className="font-medium">State University of Information and Communication Technologies</p>
            <p className="text-gray-500">01/2003 – 12/2008</p>
            <p>Telecommunications | CS | Masters</p>
          </section>
          <section className="mb-8 text-sm">
            <p className="font-bold text-base">Languages</p>
            <p>English — C1</p>
            <p>German — B1</p>
            <p>Ukrainian — Native</p>
            <p>Russian — Native</p>
          </section>
        </aside>
      </div>
    </div>
  );
}
