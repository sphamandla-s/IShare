export interface ListingsData {
    id: number;
    title: string;
    description: string;
    image: string;
    location: string;
    price: string;
    features: string[];
    type : string
}

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
  }

  export enum SpaceType {
    Coworking = "Coworking Space",
    PrivateOffice = "Private Office",
    MeetingRoom = "Meeting Room",
    EventSpace = "Event Space",
    VirtualOffice = "Virtual Office",
    HotDesk = "Hot Desk",
    DedicatedDesk = "Dedicated Desk",
    WorkshopSpace = "Workshop Space",
    CreativeStudio = "Creative Studio",
    ExecutiveSuite = "Executive Suite",
    SharedOffice = "Shared Office",
    OpenWorkspace = "Open Workspace",
    LaboratorySpace = "Laboratory Space",
    Apartment = "Apartment",
    House = "House",
    Condominium = "Condominium",
    Townhouse = "Townhouse",
    Loft = "Loft",
    Studio = "Studio",
    Villa = "Villa",
    Dormitory = "Dormitory",
    GuestHouse = "Guest House",
    Cabin = "Cabin"
}

