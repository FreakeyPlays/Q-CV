export const ProjectInputs = [
    {
        id: 1,
        name: "title",
        type: "text",
        placeholder: "Title",
        label: "Title",
        errorMessage: "Please provide a valid Title!",
        pattern: "^.{8-256}$",
        required: true,
        customClass: "formTitle"
    },
    {
        id: 2,
        name: "customer",
        type: "text",
        placeholder: "Customer",
        label: "Customer",
        errorMessage: "Please provide a valid Customer!",
        pattern: "^.{1-64}$",
        required: true,
        customClass: "formCustomer"
    },
    {
        id: 3,
        name: "industry",
        type: "text",
        placeholder: "Industry",
        label: "Industry",
        errorMessage: "Please provide a valid Industry!",
        pattern: "^[A-Za-z]{1-256}$",
        required: true,
        customClass: "formIndustry"
    },
    {
        id: 4,
        name: "country",
        type: "text",
        placeholder: "Country",
        label: "Country",
        errorMessage: "Please provide a valid Country!",
        pattern: "^[A-Za-z]{3,256}$",
        required: true,
        customClass: "formCountry"
    },
    {
        id: 5,
        name: "position",
        type: "text",
        placeholder: "Position",
        label: "Position",
        errorMessage: "Please provide a valid Position!",
        pattern: "^[A-Za-z]{3-16}$",
        required: true,
        customClass: "formPosition"
    },
    {
        id: 6,
        name: "startDate",
        type: "date",
        placeholder: "Start Date",
        label: "Start Date",
        errorMessage: "Please provide a valid Date! (DD-MM-YYY)",
        pattern: "^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$",
        required: true,
        customClass: "formStartDate"
    },
    {
        id: 7,
        name: "endDate",
        type: "date",
        placeholder: "End Date",
        label: "End Date",
        errorMessage: "Please provide a valid Date! (DD-MM-YYY)",
        pattern: "^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$",
        required: true,
        customClass: "formEndDate"
    },
    {
        id: 8,
        name: "description",
        type: "textarea",
        placeholder: "Description",
        label: "Description",
        errorMessage: "Please provide a valid Description!",
        pattern: "^.{1,}$",
        required: true,
        customClass: "formDescription"
    },
    {
        id: 9,
        name: "activities",
        type: "text",
        placeholder: "Activities",
        label: "Activities*",
        errorMessage: "Please provide valid Activities!",
        pattern: "^(?:[a-zA-Z0-9 ]+,)*[a-zA-Z0-9 ]+$",
        required: false,
        customClass: "formActivities"
    },
    {
        id: 10,
        name: "location",
        type: "text",
        placeholder: "Location",
        label: "Location",
        errorMessage: "Please provide a valid Location!",
        pattern: "^[A-Za-z0-9]{3-16}$",
        required: true,
        customClass: "formLocation"
    },
    {
        id: 11,
        name: "teamSize",
        type: "text",
        placeholder: "Team Size",
        label: "Team Size",
        errorMessage: "Please provide a valid Team Size!",
        pattern: "^.{16,}$",
        required: true,
        customClass: "formTeamSize"
    }
]