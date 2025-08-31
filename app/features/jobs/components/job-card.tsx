import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";

interface JobCardProps {
  jobId: string;
  title: string;
  company: string;
  companyLogoUrl: string;
  postedAt: string;
  type: string;
  companyHq: string;
  location: string;
  salary: string;
}

export function JobCard({
  jobId,
  title,
  company,
  companyLogoUrl,
  companyHq,
  postedAt,
  type,
  location,
  salary,
}: JobCardProps) {
  const formatSalary = (min: number, max: number, currency: string) => {
    return `${currency}${min.toLocaleString()} - ${currency}${max.toLocaleString()}`;
  };

  return (
    <Link to={`/jobs/${jobId}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={companyLogoUrl}
              alt={`${company} Logo`}
              className="size-10 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">{company}</span>
              <span className="text-xs text-muted-foreground">{postedAt}</span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="outline">{type}</Badge>
          <Badge variant="outline">{location}</Badge>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">{salary}</span>
            <span className="text-sm text-muted-foreground">{companyHq}</span>
          </div>
          <Button variant="secondary" size="sm">
            Apply now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
