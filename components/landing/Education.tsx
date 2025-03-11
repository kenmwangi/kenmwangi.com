import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  const education = [
    {
      id: 1,
      degree: "Computer Science and Mathematics",
      institution: "Multimedia University of Kenya",
      period: "2016 - 2020",
      description:
        "Graduated with honors, focusing on algorithms, data structures, and software engineering principles.",
    },
    {
      id: 2,
      degree: "Software Engineering Program",
      institution: "ALX Africa",
      period: "2022",
      description:
        "Intensive software engineering program focusing on practical skills and industry-relevant technologies.",
    },
  ];

  return (
    <section className="my-12">
      <h2 className="text-xl font-semibold mb-6">Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <Card key={edu.id} className=" shadow-none">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="size-4" />
                <span>{edu.period}</span>
              </div>

              <p className="text-sm text-muted-foreground">{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
