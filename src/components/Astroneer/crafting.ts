type ResourceName = "Aluminum" | "Aluminum Alloy" | "Ammonium" | "Astronium" | "Ceramic" | "Compound" | "Copper" | "Diamond" | "Exo Chip" | "Explosive Powder"
| "Glass" | "Graphene" | "Graphite" | "Iron" | "Lithium" | "Nanocarbon Alloy" | "Organic" | "Plastic" | "Quartz" | "Resin" | "Rubber" | "Scrap" | "Silicone" | "Soil" | "Steel" | "Titanium" | "Titanium Alloy"
| "Tungsten" | "Tungsten Carbide" | "Zinc";

type Resource = {
    name: string;
    parent?: string;
}

export type CraftableItem = {
    name: string;
    researchPoints?: number;
    resources: Array<
        {
            resource: ResourceName,
            count: number
        }
    >;
    tags?: string[];
}

export const backpackCraftables: CraftableItem[][] = [
    [
        {
            name: "Small Printer",
            resources: [{ resource: "Compound", count: 1 }]
        },
        {
            name: "Packager",
            resources: [{ resource: "Graphite", count: 1 }]
        },
        {
            name: "Leveling Block",
            resources: [{ resource: "Soil", count: 1 }]
        },
        {
            name: "Tapper",
            resources: [{ resource: "Aluminum", count: 1 }]
        }
    ],
    [
        {
            name: "Tethers",
            resources: [{ resource: "Compound", count: 1 }]
        },
        {
            name: "Oxygen Filters",
            resources: [{ resource: "Resin", count: 1 }]
        },
        {
            name: "Oxygen Tank",
            resources: [{ resource: "Glass", count: 1 }],
            researchPoints: 2000
        },
        {
            name: "Portable Oxygenator",
            resources: [{ resource: "Nanocarbon Alloy", count: 1 }],
            researchPoints: 2000
        }
    ],
    [
        {
            name: "Small Canister",
            resources: [{ resource: "Resin", count: 1 }]
        },
        {
            name: "Beacon",
            resources: [{ resource: "Quartz", count: 1 }]
        },
        {
            name: "Worklight",
            resources: [{ resource: "Copper", count: 1 }]
        },
        {
            name: "Glowsticks",
            resources: [{ resource: "Organic", count: 1 }],
            researchPoints: 350
        },
        {
            name: "Floodlight",
            resources: [{ resource: "Tungsten", count: 1 }],
            researchPoints: 2000
        }
    ],
    [
        {
            name: "Small Generator",
            resources: [{ resource: "Compound", count: 1 }],
            tags: ["power"]
        },
        {
            name: "Power Cells",
            resources: [{ resource: "Graphite", count: 1 }],
            researchPoints: 800,
            tags: ["power"]
        },
        {
            name: "Small Solar",
            resources: [{ resource: "Copper", count: 1 }],
            researchPoints: 300,
            tags: ["power"]
        },
        {
            name: "Small Wind Turbine",
            resources: [{ resource: "Ceramic", count: 1 }],
            researchPoints: 300,
            tags: ["power"]
        },
        {
            name: "Small Battery",
            resources: [{ resource: "Zinc", count: 1 }],
            researchPoints: 2000,
            tags: ["power"]
        },
    ],
    [
        {
            name: "Boost Mod",
            resources: [{ resource: "Zinc", count: 1 }],
            researchPoints: 1000
        },
        {
            name: "Wide Mod",
            resources: [{ resource: "Zinc", count: 1 }],
            researchPoints: 1000
        },
        {
            name: "Narrow Mod",
            resources: [{ resource: "Zinc", count: 1 }],
            researchPoints: 1000
        },
        {
            name: "Inhibitor Mod",
            resources: [{ resource: "Zinc", count: 1 }],
            researchPoints: 1000
        },
        {
            name: "Alignment Mod",
            resources: [{ resource: "Zinc", count: 1 }],
            researchPoints: 1000
        },
    ],
    [
        {
            name: "Drill Mod 1",
            resources: [{ resource: "Ceramic", count: 1 }],
            researchPoints: 1000
        },
        {
            name: "Drill Mod 2",
            resources: [{ resource: "Tungsten Carbide", count: 1 }],
            researchPoints: 2500
        },
        {
            name: "Drill Mod 3",
            resources: [{ resource: "Diamond", count: 1 }],
            researchPoints: 3750
        },
    ],
    [
        {
            name: "Dynamite",
            resources: [{ resource: "Explosive Powder", count: 1 }],
            researchPoints: 3750
        },
        {
            name: "Fireworks",
            resources: [{ resource: "Explosive Powder", count: 1 }],
            researchPoints: 3750
        },
    ],
    [
        {
            name: "Small Camera",
            resources: [{ resource: "Exo Chip", count: 1 }],
            researchPoints: 2500
        },
        {
            name: "Small Trumpet Horn",
            resources: [{ resource: "Resin", count: 1 }],
            researchPoints: 1000
        },
        {
            name: "Holographic Figurine",
            resources: [{ resource: "Plastic", count: 1 }],
            researchPoints: 3000
        },
        {
            name: "Terrain Analyzer",
            resources: [{ resource: "Zinc", count: 1 }],
            researchPoints: 2000
        },
        {
            name: "Probe Scanner",
            resources: [{ resource: "Steel", count: 1 }],
            researchPoints: 4000
        },
    ],
    [
        {
            name: "Solid-Fuel Jump Jet",
            resources: [{ resource: "Aluminum Alloy", count: 1 }],
            researchPoints: 5000
        },
        {
            name: "Hydrazine Jet Pack",
            resources: [{ resource: "Titanium Alloy", count: 1 }],
            researchPoints: 15000
        },
        {
            name: "Hoverboard",
            resources: [{ resource: "Exo Chip", count: 1 }],
            tags: ["vehicle", "car"]
        },
    ]
];

export const smallCraftables: CraftableItem[][] = [
    [
        {
            name: "Medium Printer",
            resources: [{ resource: "Compound", count: 2 }]
        },
        {
            name: "Oxygenator",
            resources: [{ resource: "Aluminum", count: 1 }, { resource: "Ceramic", count: 1 }],
            researchPoints: 1800
        },
        {
            name: "Medium Shredder",
            resources: [{ resource: "Iron", count: 2 }],
            researchPoints: 1250
        },
        {
            name: "Field Shelter",
            resources: [{ resource: "Silicone", count: 1 }, { resource: "Graphene", count: 1 }],
            researchPoints: 8000
        },
    ],
    [
        {
            name: "Auto Arm",
            resources: [{ resource: "Aluminum", count: 1 }, { resource: "Graphite", count: 1 }],
            researchPoints: 1500
        },
        {
            name: "Medium Resource Canister",
            resources: [{ resource: "Plastic", count: 1 }, { resource: "Glass", count: 1 }],
            researchPoints: 2000
        },
        {
            name: "Medium Fluid & Soil Canister",
            resources: [{ resource: "Plastic", count: 1 }, { resource: "Glass", count: 1 }],
            researchPoints: 2500
        },
        {
            name: "Medium Gas Canister",
            resources: [{ resource: "Silicone", count: 1 }, { resource: "Glass", count: 1 }],
            researchPoints: 4000
        },
    ],
    [
        {
            name: "Power Sensor",
            resources: [{ resource: "Zinc", count: 1 }, { resource: "Copper", count: 1 }],
            researchPoints: 500,
            tags: ["power"]
        },
        {
            name: "Storage Sensor",
            resources: [{ resource: "Zinc", count: 1 }, { resource: "Quartz", count: 1 }],
            researchPoints: 750
        },
        {
            name: "Battery Sensor",
            resources: [{ resource: "Zinc", count: 1 }, { resource: "Graphite", count: 1 }],
            researchPoints: 750
        },
    ],
    [
        {
            name: "Button Repeater",
            resources: [{ resource: "Zinc", count: 1 }],
            researchPoints: 300
        },
        {
            name: "Proximity Repeater",
            resources: [{ resource: "Zinc", count: 1 }],
            researchPoints: 700
        },
        {
            name: "Delay Repeater",
            resources: [{ resource: "Zinc", count: 1 }],
            researchPoints: 1000
        },
        {
            name: "Count Repeater",
            resources: [{ resource: "Zinc", count: 1 }],
            researchPoints: 1000
        },
    ],
    [
        {
            name: "Power Extenders",
            resources: [{ resource: "Copper", count: 1 }],
            researchPoints: 500,
            tags: ["power"]
        },
        {
            name: "Power Switch",
            resources: [{ resource: "Copper", count: 1 }],
            researchPoints: 750,
            tags: ["power"]
        },
        {
            name: "Splitter",
            resources: [{ resource: "Copper", count: 1 },{ resource: "Graphite", count: 1 }],
            researchPoints: 1000,
            tags: ["power"]
        },
    ],
    [
        {
            name: "Medium Generator",
            resources: [{ resource: "Aluminum", count: 1 },{ resource: "Tungsten", count: 1 }],
            researchPoints: 2000,
            tags: ["power"]
        },
        {
            name: "Medium Solar Panel",
            resources: [{ resource: "Copper", count: 1 },{ resource: "Glass", count: 1 }],
            researchPoints: 2000,
            tags: ["power"]
        },
        {
            name: "Medium Wind Turbine",
            resources: [{ resource: "Aluminum", count: 1 },{ resource: "Ceramic", count: 1 }],
            researchPoints: 2500,
            tags: ["power"]
        },
        {
            name: "Medium Battery",
            resources: [{ resource: "Lithium", count: 1 },{ resource: "Zinc", count: 1 }],
            researchPoints: 3750,
            tags: ["power"]
        },
        {
            name: "RTG",
            resources: [{ resource: "Nanocarbon Alloy", count: 1 },{ resource: "Lithium", count: 1 }],
            researchPoints: 12500,
            tags: ["power"]
        },
    ],
    [
        {
            name: "Medium Platform A",
            resources: [{ resource: "Resin", count: 1 }]
        },
        {
            name: "Medium Platform B",
            resources: [{ resource: "Resin", count: 2 }],
            researchPoints: 250
        },
        {
            name: "Medium Platform C",
            resources: [{ resource: "Resin", count: 1 }],
            researchPoints: 400
        },
        {
            name: "Tall Platform",
            resources: [{ resource: "Ceramic", count: 1 }],
            researchPoints: 750
        },
        {
            name: "Medium T Platform",
            resources: [{ resource: "Resin", count: 2 }],
            researchPoints: 400
        },
    ],
    [
        {
            name: "Medium Storage",
            resources: [{ resource: "Resin", count: 2 }]
        },
        {
            name: "Medium Storage Silo",
            resources: [{ resource: "Titanium", count: 2 }],
            researchPoints: 3000
        },
        {
            name: "Tall Storage",
            resources: [{ resource: "Ceramic", count: 1 }],
            researchPoints: 400
        },
    ],
    [
        {
            name: "Rover Seat",
            resources: [{ resource: "Compound", count: 2 }],
            tags: ["vehicle", "car"]
        },
        {
            name: "Tractor",
            resources: [{ resource: "Aluminum", count: 2 }],
            researchPoints: 1000,
            tags: ["vehicle", "car"]
        },
        {
            name: "Trailer",
            resources: [{ resource: "Aluminum", count: 1 }, { resource: "Compound", count: 1 }],
            researchPoints: 1500,
            tags: ["vehicle", "car"]
        },
        {
            name: "Medium Buggy Horn",
            resources: [{ resource: "Plastic", count: 1 }, { resource: "Rubber", count: 1 }],
            researchPoints: 2000,
            tags: ["vehicle", "car"]
        },
        {
            name: "Winch",
            resources: [{ resource: "Exo Chip", count: 1 }, { resource: "Rubber", count: 1 }],
            researchPoints: 3750,
            tags: ["vehicle", "car"]
        },
    ],
    [
        {
            name: "Paver",
            resources: [{ resource: "Aluminum Alloy", count: 1 }, { resource: "Silicone", count: 1 }],
            researchPoints: 5000,
            tags: ["vehicle", "car"]
        },
        {
            name: "Drill Strength",
            resources: [{ resource: "Tungsten Carbide", count: 1 }, { resource: "Ceramic", count: 1 }],
            researchPoints: 2500,
            tags: ["vehicle", "car"]
        },
        {
            name: "Drill Strength 2",
            resources: [{ resource: "Titanium Alloy", count: 1 }, { resource: "Tungsten Carbide", count: 1 }],
            researchPoints: 5000,
            tags: ["vehicle", "car"]
        },
        {
            name: "Drill Strength 3",
            resources: [{ resource: "Diamond", count: 1 }, { resource: "Titanium Alloy", count: 1 }],
            researchPoints: 7500,
            tags: ["vehicle", "car"]
        },
    ],
    [
        {
            name: "Solid-Fuel Thruster",
            resources: [{ resource: "Aluminum", count: 1 }, { resource: "Ammonium", count: 1 }],
            researchPoints: 500,
            tags: ["vehicle", "rocket"]
        },
        {
            name: "Hydrazine Thruster",
            resources: [{ resource: "Exo Chip", count: 1 }, { resource: "Steel", count: 1 }],
            researchPoints: 3750,
            tags: ["vehicle", "rocket"]
        },
    ],
    [
        {
            name: "Rail Post Bundle",
            resources: [{ resource: "Resin", count: 1 }, { resource: "Aluminum", count: 1 }],
            researchPoints: 750,
            tags: ["vehicle", "train"]
        },
        {
            name: "Tall Rail Post Bundle",
            resources: [{ resource: "Resin", count: 1 }, { resource: "Aluminum", count: 1 }],
            researchPoints: 750,
            tags: ["vehicle", "train"]
        },
        {
            name: "Rail Junction Bundle",
            resources: [{ resource: "Aluminum", count: 2 }],
            researchPoints: 1000,
            tags: ["vehicle", "train"]
        },
    ],
    [
        {
            name: "Fault Finder",
            resources: [{ resource: "Astronium", count: 1 }, { resource: "Scrap", count: 1 }],
            researchPoints: 1000000
        },
    ],
    [
        {
            name: "Ruby",
            resources: [{ resource: "Resin", count: 1 }, { resource: "Quartz", count: 1 }],
            researchPoints: 1000000
        },
    ]
];

export const mediumCraftables: CraftableItem[][] = [
    [
        {
            name: "Large Printer",
            resources: [{ resource: "Compound", count: 3 }]
        },
        {
            name: "Smelting Furnace",
            resources: [{ resource: "Compound", count: 1 }, { resource: "Resin", count: 2 }],
            researchPoints: 250
        },
        {
            name: "Soil Centrifuge",
            resources: [{ resource: "Compound", count: 2 }, { resource: "Aluminum", count: 1 }],
            researchPoints: 750
        },
        {
            name: "Chemistry Lab",
            resources: [{ resource: "Ceramic", count: 1 }, { resource: "Glass", count: 1 }, { resource: "Tungsten", count: 1 }],
            researchPoints: 1600
        },
        {
            name: "Atmospheric Condenser",
            resources: [{ resource: "Plastic", count: 1 }, { resource: "Glass", count: 1 }, { resource: "Iron", count: 1 }],
            researchPoints: 2200
        },
    ],
    [
        {
            name: "Research Chamber",
            resources: [{ resource: "Compound", count: 2 }, { resource: "Resin", count: 1 }]
        },
        {
            name: "Exo Request Platform",
            resources: [{ resource: "Compound", count: 1 }, { resource: "Resin", count: 2 }]
        },
        {
            name: "Trade Platform",
            resources: [{ resource: "Exo Chip", count: 1 }, { resource: "Iron", count: 1 }, { resource: "Tungsten", count: 1 }],
            researchPoints: 2500
        },
        {
            name: "Large Shredder",
            resources: [{ resource: "Exo Chip", count: 1 }, { resource: "Iron", count: 1 }, { resource: "Tungsten Carbide", count: 1 }],
            researchPoints: 2500
        },
    ],
    [
        {
            name: "Large Solar Panel",
            resources: [{ resource: "Aluminum Alloy", count: 1 }, { resource: "Glass", count: 1 }, { resource: "Copper", count: 1 }],
            researchPoints: 4000,
            tags: ["power"]
        },
        {
            name: "Large Wind Turbine",
            resources: [{ resource: "Aluminum Alloy", count: 1 }, { resource: "Glass", count: 1 }, { resource: "Ceramic", count: 1 }],
            researchPoints: 3500,
            tags: ["power"]
        },
    ],
    [
        {
            name: "Large Platform A",
            resources: [{ resource: "Resin", count: 2 }]
        },
        {
            name: "Large Platform B",
            resources: [{ resource: "Resin", count: 3 }],
            researchPoints: 500
        },
        {
            name: "Large Platform C",
            resources: [{ resource: "Resin", count: 1 }, { resource: "Ceramic", count: 1 }, { resource: "Iron", count: 1 }],
            researchPoints: 1000
        },
        {
            name: "Large T Platform",
            resources: [{ resource: "Resin", count: 1 }, { resource: "Aluminum", count: 2 }],
            researchPoints: 1000
        },
        {
            name: "Large Curved Platform",
            resources: [{ resource: "Compound", count: 1 }, { resource: "Ceramic", count: 2 }],
            researchPoints: 1000
        },
        {
            name: "Large Extended Platform",
            resources: [{ resource: "Resin", count: 2 }],
            researchPoints: 500
        },
    ],
    [
        {
            name: "Large Resource Canister",
            resources: [{ resource: "Glass", count: 1 }, { resource: "Titanium", count: 1 }, { resource: "Nanocarbon Alloy", count: 1 }],
            researchPoints: 5000
        },
        {
            name: "Large Storage",
            resources: [{ resource: "Ceramic", count: 1 }],
            researchPoints: 2000
        },
        {
            name: "Large Storage Silo A",
            resources: [{ resource: "Aluminum", count: 2 }, { resource: "Steel", count: 1 }],
            researchPoints: 5000
        },
        {
            name: "Large Storage Silo B",
            resources: [{ resource: "Steel", count: 3 }],
            researchPoints: 7500
        },
        {
            name: "Large Active Storage",
            resources: [{ resource: "Zinc", count: 1 }, { resource: "Aluminum", count: 1 }, { resource: "Resin", count: 1 }],
            researchPoints: 2000
        },
    ],
    [
        {
            name: "Buggy",
            resources: [{ resource: "Compound", count: 1 }, { resource: "Aluminum", count: 1 }],
            researchPoints: 1500,
            tags: ["vehicle", "car"]
        },
        {
            name: "Large Rover Seat",
            resources: [{ resource: "Plastic", count: 2 }, { resource: "Compound", count: 1 }],
            researchPoints: 2000,
            tags: ["vehicle", "car"]
        },
        {
            name: "Medium Rover",
            resources: [{ resource: "Plastic", count: 2 }, { resource: "Rubber", count: 1 }],
            researchPoints: 3750,
            tags: ["vehicle", "car"]
        },
        {
            name: "VTOL",
            resources: [{ resource: "Exo Chip", count: 1 }, { resource: "Tungsten Carbide", count: 1 }, { resource: "Silicone", count: 1 }],
            researchPoints: 1000000,
            tags: ["vehicle", "plane"]
        },
        {
            name: "Crane",
            resources: [{ resource: "Steel", count: 1 }, { resource: "Silicone", count: 1 }, { resource: "Titanium", count: 1 }],
            researchPoints: 4500
        },
        {
            name: "Large Fog Horn",
            resources: [{ resource: "Steel", count: 1 }, { resource: "Plastic", count: 1 }, { resource: "Rubber", count: 1 }],
            researchPoints: 4000,
            tags: ["vehicle", "car"]
        },
        {
            name: "Large Rover Seat B",
            resources: [{ resource: "Plastic", count: 2 }, { resource: "Compound", count: 1 }],
            researchPoints: 1000000,
            tags: ["vehicle", "car"]
        },
    ],
    [
        {
            name: "Rail Engine",
            resources: [{ resource: "Resin", count: 1 }, { resource: "Aluminum", count: 1 }, { resource: "Copper", count: 1 }],
            researchPoints: 1000,
            tags: ["vehicle", "train"]
        },
        {
            name: "Rail Car",
            resources: [{ resource: "Resin", count: 2 }, { resource: "Aluminum", count: 1 }],
            researchPoints: 1500,
            tags: ["vehicle", "train"]
        },
    ],
    [
        {
            name: "Recreational Sphere",
            resources: [{ resource: "Aluminum Alloy", count: 1 }, { resource: "Rubber", count: 1 }],
            researchPoints: 4500,
            tags: ["vehicle", "car"]
        },
    ]
];

export const largeCraftables: CraftableItem[][] = [
    [
        {
            name: "Shelter",
            resources: [{ resource: "Plastic", count: 2 }, { resource: "Silicone", count: 2 }]
        },
        {
            name: "Auto Extractor",
            resources: [{ resource: "Exo Chip", count: 1 }, { resource: "Steel", count: 1 }, { resource: "Tungsten Carbide", count: 1 }, { resource: "Rubber", count: 1 }],
            researchPoints: 7500
        },
        {
            name: "Extra Large Shredder",
            resources: [{ resource: "Exo Chip", count: 2 }, { resource: "Tungsten Carbide", count: 1 }, { resource: "Steel", count: 1 }],
            researchPoints: 5000
        },
    ],
    [
        {
            name: "Solar Array",
            resources: [{ resource: "Copper", count: 1 }, { resource: "Glass", count: 1 }, { resource: "Graphene", count: 1 }, { resource: "Aluminum Alloy", count: 1 }],
            researchPoints: 6000,
            tags: ["power"]
        },
        {
            name: "XL Wind Turbine",
            resources: [{ resource: "Iron", count: 1 }, { resource: "Ceramic", count: 1 }, { resource: "Graphene", count: 1 }, { resource: "Aluminum Alloy", count: 1 }],
            researchPoints: 4500,
            tags: ["power"]
        },
    ],
    [
        {
            name: "Medium Sensor Arch",
            resources: [{ resource: "Zinc", count: 1 }, { resource: "Quartz", count: 1 }],
            researchPoints: 750
        },
        {
            name: "XL Sensor Arch",
            resources: [{ resource: "Zinc", count: 2 }, { resource: "Quartz", count: 2 }],
            researchPoints: 1000
        },
        {
            name: "XL Sensor Canopy",
            resources: [{ resource: "Zinc", count: 2 }, { resource: "Quartz", count: 2 }],
            researchPoints: 1000
        },
    ],
    [
        {
            name: "Large Sensor Ring",
            resources: [{ resource: "Zinc", count: 1 }, { resource: "Quartz", count: 1 }],
            researchPoints: 500
        },
        {
            name: "Large Sensor Hoop A",
            resources: [{ resource: "Zinc", count: 1 }, { resource: "Quartz", count: 2 }],
            researchPoints: 750
        },
        {
            name: "Large Sensor Hoop B",
            resources: [{ resource: "Zinc", count: 2 }, { resource: "Quartz", count: 1 }],
            researchPoints: 750
        },
        {
            name: "XL Sensor Hoop A",
            resources: [{ resource: "Zinc", count: 2 }, { resource: "Quartz", count: 2 }],
            researchPoints: 750
        },
        {
            name: "XL Sensor Hoop B",
            resources: [{ resource: "Zinc", count: 3 }, { resource: "Quartz", count: 1 }],
            researchPoints: 1000
        },
    ],
    [
        {
            name: "Extra Large Platform A",
            resources: [{ resource: "Iron", count: 2 }, { resource: "Ceramic", count: 2 }],
            researchPoints: 2000
        },
        {
            name: "Extra Large Platform B",
            resources: [{ resource: "Iron", count: 4 }],
            researchPoints: 3000
        },
        {
            name: "Extra Large Platform C",
            resources: [{ resource: "Iron", count: 2 }, { resource: "Resin", count: 2 }],
            researchPoints: 2000
        },
        {
            name: "Extra Large Curved Platform",
            resources: [{ resource: "Ceramic", count: 2 }, { resource: "Compound", count: 2 }],
            researchPoints: 2000
        },
        {
            name: "XL Extended Platform",
            resources: [{ resource: "Resin", count: 3 }],
            researchPoints: 750
        },
    ],
    [
        {
            name: "Figurine Platform",
            resources: [{ resource: "Iron", count: 4 }],
            researchPoints: 3000
        },
        {
            name: "Extra Large Storage",
            resources: [{ resource: "Iron", count: 2 }, { resource: "Ceramic", count: 2 }],
            researchPoints: 2000
        },
        {
            name: "Extra Large Resource Canister",
            resources: [{ resource: "Diamond", count: 1 }, { resource: "Exo Chip", count: 1 }, { resource: "Nanocarbon Alloy", count: 2 }],
            researchPoints: 1000000
        },
    ],
    [
        {
            name: "Large Rover",
            resources: [{ resource: "Exo Chip", count: 2 }, { resource: "Aluminum Alloy", count: 1 }, { resource: "Rubber", count: 1 }],
            researchPoints: 5000,
            tags: ["vehicle", "car"]
        },
        {
            name: "Landing Pad",
            resources: [{ resource: "Aluminum", count: 1 }, { resource: "Ceramic", count: 2 }],
            researchPoints: 750,
            tags: ["vehicle", "rocket"]
        },
        {
            name: "Small Shuttle",
            resources: [{ resource: "Aluminum", count: 2 }],
            researchPoints: 1500,
            tags: ["vehicle", "rocket"]
        },
        {
            name: "Medium Shuttle",
            resources: [{ resource: "Aluminum Alloy", count: 1 }, { resource: "Ceramic", count: 2 }],
            researchPoints: 3750,
            tags: ["vehicle", "rocket"]
        },
        {
            name: "Large Shuttle",
            resources: [{ resource: "Exo Chip", count: 2 }, { resource: "Titanium Alloy", count: 1 }, { resource: "Ceramic", count: 1 }],
            researchPoints: 5000,
            tags: ["vehicle", "rocket"]
            
        },
    ],
    [
        {
            name: "Rail Station",
            resources: [{ resource: "Titanium", count: 2 }, { resource: "Copper", count: 1 }, { resource: "Quartz", count: 1 }],
            researchPoints: 2500,
            tags: ["vehicle", "train"]
        },
    ]
];
