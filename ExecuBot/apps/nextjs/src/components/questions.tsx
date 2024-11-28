import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@saasfly/ui/accordion";

export function Questions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>About Saasfly</AccordionTrigger>
        <AccordionContent>
          Founded by Ram Francis, former Facebook engineer and Department of
          State cloud modernization expert, Execubot was born from real-world
          experience with the challenges of managing technical teams in
          non-tech-first organizations. Our platform aggregates data across
          multiple developer tools and platforms to provide executives with
          clear insights into team performance and productivity. In today's
          complex development environments, tracking real productivity across
          multiple platforms is challenging. Execubot consolidates data from
          Jira, GitHub, GitLab, AWS, Azure, and GCP to provide executives with
          clear insights into team performance, helping identify both top
          performers and potential issues. If you're managing technical teams,
          especially in non-tech-first organizations, and struggling to get
          clear visibility into actual productivity and performance, Execubot is
          designed for you. Our platform helps executives make data-driven
          decisions about team composition and performance, identifying both
          high performers and potential areas of concern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why Next.js?</AccordionTrigger>
        <AccordionContent>
          Next.js is a powerful and versatile framework that offers a wide range
          of benefits for building web applications. It is known for its
          excellent performance, strong developer experience, and comprehensive
          feature set.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is this starter for you?</AccordionTrigger>
        <AccordionContent>
          If you’re embarking on the development of a SaaS service and are in
          search of a solid foundation, meticulously crafted architecture, and
          an enriching developer experience, then this starter kit stands as a
          prime resource to consider. It encompasses a holistic collection of
          best practices and tools, each thoroughly vetted and demonstrated to
          be effective across numerous projects. Even if you’re uncertain about
          whether a starter kit fits your project’s needs, this resource still
          holds significant value. By delving into the starter kit, you have the
          opportunity to garner inspiration from its array of solutions to
          common challenges encountered by developers. This exploration can
          serve as a pathway to identifying commendable practices and devising
          robust solutions tailored to your specific development process. In
          summary, whether you opt to leverage this starter kit in its entirety
          or merely extract certain ideas from it, we are confident it provides
          indispensable insights and tools for anyone aiming to create a
          high-caliber SaaS service.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
