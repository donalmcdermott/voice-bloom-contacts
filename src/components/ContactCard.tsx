import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Contact {
  id: string;
  name: string;
  summary: string;
  avatar?: string;
}

interface ContactCardProps {
  contact: Contact;
  onClick?: () => void;
}

export function ContactCard({ contact, onClick }: ContactCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      onClick={onClick}
      className="flex items-center gap-4 p-4 bg-card hover:bg-secondary/50 transition-colors duration-200 cursor-pointer rounded-lg border border-border/50"
    >
      <Avatar className="w-12 h-12">
        <AvatarImage src={contact.avatar} alt={contact.name} />
        <AvatarFallback className="bg-primary/20 text-primary font-medium">
          {getInitials(contact.name)}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-foreground truncate">
          {contact.name}
        </h3>
        <p className="text-sm text-muted-foreground truncate">
          {contact.summary}
        </p>
      </div>
    </div>
  );
}