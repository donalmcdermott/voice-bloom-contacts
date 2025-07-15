import { useState, useMemo } from "react";
import { ContactCard } from "@/components/ContactCard";
import { SearchBar } from "@/components/SearchBar";

// Mock data - in a real app this would come from a database or API
const mockContacts = [
  {
    id: "1",
    name: "Sarah Chen",
    summary: "Met at Patch, startup founder",
    avatar: "/placeholder.svg?height=48&width=48&text=SC"
  },
  {
    id: "2", 
    name: "Marcus Johnson",
    summary: "College friend, works at Meta",
    avatar: "/placeholder.svg?height=48&width=48&text=MJ"
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    summary: "Designer from the coffee shop",
    avatar: "/placeholder.svg?height=48&width=48&text=ER"
  },
  {
    id: "4",
    name: "David Kim",
    summary: "Neighbor, dog owner",
    avatar: "/placeholder.svg?height=48&width=48&text=DK"
  },
  {
    id: "5",
    name: "Lisa Zhang",
    summary: "Yoga instructor, mindfulness coach",
    avatar: "/placeholder.svg?height=48&width=48&text=LZ"
  },
  {
    id: "6",
    name: "Alex Thompson",
    summary: "Former colleague from Google",
    avatar: "/placeholder.svg?height=48&width=48&text=AT"
  }
];

export function ContactsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = useMemo(() => {
    if (!searchQuery.trim()) return mockContacts;
    
    const query = searchQuery.toLowerCase();
    return mockContacts.filter(contact =>
      contact.name.toLowerCase().includes(query) ||
      contact.summary.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleContactClick = (contact: any) => {
    console.log("Contact clicked:", contact.name);
    // Here you would navigate to contact details or trigger an action
  };

  return (
    <div className="flex-1 flex flex-col bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border/50 p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-foreground">Contacts</h1>
          <span className="text-sm text-muted-foreground">
            {filteredContacts.length} contacts
          </span>
        </div>
        
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search by name or description..."
        />
      </div>

      {/* Contact list */}
      <div className="flex-1 overflow-y-auto">
        {filteredContacts.length > 0 ? (
          <div className="p-4 space-y-3">
            {filteredContacts.map((contact, index) => (
              <div
                key={contact.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ContactCard
                  contact={contact}
                  onClick={() => handleContactClick(contact)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center space-y-2">
              <p className="text-muted-foreground">No contacts found</p>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search query
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}