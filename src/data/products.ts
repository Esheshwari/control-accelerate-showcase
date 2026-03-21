import antiCollisionDevice from "@/assets/products/Anti-collision device.png";
import beltSwaySwitch from "@/assets/products/belt-sway-switch.jpg";
import chainBlockHoist from "@/assets/products/chain block mannual chain hoist.jpg";
import currentCollector from "@/assets/products/CURRENT COLLECTOR.jpg";
import dischargeRod from "@/assets/products/discharge rod.jpg";
import dslBusbar from "@/assets/products/dsl busbar.png";
import earthCurrentCollector from "@/assets/products/earth-current-collector.jpg";
import electricHydraulicThruster from "@/assets/products/Electric-hydraulic thruster.jpg";
import electromagneticFlowMeter from "@/assets/products/electromagnetic flow meter.jpg";
import eotCrane from "@/assets/products/eot crane.jpeg";
import heatResistantFireSleeve from "@/assets/products/heat resistant fire sleeve.jpg";
import hydraulicFitting from "@/assets/products/hydraulic-fitting.jpg";
import hydraulicHose from "@/assets/products/Hydraulic-hose.jpg";
import industrialCarbonBrush from "@/assets/products/industrial carbon brush.jpg";
import industrialDrumHeater from "@/assets/products/Industrial drum heater.jpg";
import industrialHooter from "@/assets/products/industrial-hooter.jpg";
import joystickController from "@/assets/products/joystick controller.jpg";
import loadCell from "@/assets/products/load-cell.jpg";
import motionSensor from "@/assets/products/motion-sensor.jpg";
import plugSocket from "@/assets/products/plug & socket.jpg";
import pullCordRope from "@/assets/products/pull cord rope.jpg";
// import pullCordSwitchLamp from "@/assets/products/Pull Cord Switch with Lamp indication.jpg";
import pullCordSwitch from "@/assets/products/Pull cord switch.jpg";
import resistanceBox from "@/assets/products/resistance box.jpg";
import smokeSensor from "@/assets/products/smoke-sensor.jpg";
import waveSling from "@/assets/products/wave sling.jpg";
import weldingDistributionBox from "@/assets/products/welding-distribution-box.jpg";
import winchMachine from "@/assets/products/winch machine.jpg";
import zeroSpeedSwitch from "@/assets/products/zero-speed-switch.jpg";
import industrialCoolingFan from "@/assets/products/industrial-cooling-fan.png";
import infraredTemperatureSensor from "@/assets/products/Infrared-temperature-sensor.jpg";
import pressureTransmitter from "@/assets/products/monocrystalline-silicon-pressure-transmitter.jpg";
import springBalancer from "@/assets/products/spring-balancer.jpg";

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  applications: string[];
  specifications: Record<string, string>;
}

export const products: Product[] = [
  
  {
    id: "pull-cord-switch",
    name: "Pull Cord Emergency Stop Switch",
    shortDescription: "Safety stop mechanism for belt conveyor systems.",
    description: "A vital safety device installed along conveyor lengths to allow immediate shutdown from any point in case of emergency. The switch features a snap-action mechanism and a manual reset lever, ensuring the conveyor cannot restart until the area is inspected and the switch is manually cleared.",
    image: pullCordSwitch,
    features: [
      "Two-way actuation (pull on rope from either side)",
      "Snap action switching mechanism",
      "Manual reset lever for enhanced safety",
      "Weatherproof IP65 protection",
      "Latching operation mode"
    ],
    applications: [
      "Belt Conveyor Systems",
      "Mining and Quarrying",
      "Bulk Material Handling",
      "Packaging Lines"
    ],
    specifications: {
      "Type": "Two-way Pull cord switch",
      "Contact Configuration": "1NO + 1NC / 2NO + 2NC",
      "Contact Capacity": "AC 380V / DC 220V",
      "Action Force": "10 KG",
      "Angle of Action": "30°",
      "Limit Angle": "60°",
      "Protection Rating": "IP65",
      "Ambient Temperature": "30°C to +60°C",
      "Relative Humidity": "85%",
      "Reliability": "10^5 times"
    }
  },
  {
    id: "anti-collision-device",
    name: "Anti-Collision Device (IR Sensor)",
    shortDescription: "Infrared-based safety system for overhead traveling cranes.",
    description: "A safety system designed to prevent collisions between two electric overhead traveling cranes working on the same rails. It utilizes retro-reflective infrared waves; the emitter sends a signal to a special reflector which reflects it back to the sensor. Upon detection, it activates an alarm and reduces speed or stops the crane.",
    image: antiCollisionDevice, // Replace with your image path
    features: [
      "Retro-reflective infrared technology",
      "Adjustable set points for detection",
      "LED status indication",
      "Compact sensor and reflector modules",
      "Automatic alarm and stop triggering"
    ],
    applications: [
      "Overhead Traveling Cranes (EOT)",
      "Gantry Cranes",
      "Automated Warehouses",
      "Rail-mounted machinery"
    ],
    specifications: {
      "Sensor Type": "Infrared (IR)",
      "Range": "Up to 10 Meters",
      "Voltage Supply": "110 VAC / 230 VAC",
      "Contact Rating": "2 Amps @ 220 VAC",
      "Device Dimension": "180 x 145 x 55 mm",
      "Reflector Dimension": "130 x 75 mm",
      "Indication": "LED Display",
      "Set Points": "Adjustable"
    }
  },
{
    id: "zero-speed-switch",
    name: "Zero Speed Switch (CAI-ZSS-226)",
    shortDescription: "Motion detection and interlock protection for rotating equipment.",
    description: "The CAI-ZSS-226 detects the absence of motion (zero or low speed) in rotating industrial equipment using pulse input or magnetic/inductive sensing. It provides dry relay contact outputs for critical control, alarm, and interlock protection to prevent machine damage during stalls or slips.",
    image: zeroSpeedSwitch,
    features: [
      "Adjustable Startup Timer (1–30s) to avoid nuisance trips",
      "Fast response for safety interlock systems",
      "LED status indicators (Power / Run / Trip)",
      "IP65 industrial weatherproof enclosure",
      "Continuous industrial duty performance"
    ],
    applications: [
      "Conveyor slip detection",
      "Crusher and mixer monitoring",
      "Bucket elevator protection",
      "Rotary kiln speed monitoring"
    ],
    specifications: {
      "Model": "CAI-ZSS-226",
      "Supply Voltage": "AC 110–230 V / DC 6–36 V",
      "Speed Range": "0 – 5000 RPM",
      "Output Contacts": "Multiple (e.g., 2NO + 2NC) @ 5A 230V AC",
      "Sensing Type": "Inductive probe or magnetic sensor",
      "Mounting": "Wall or DIN rail",
      "Operating Temp": "0°C to +60°C",
      "Warranty": "12 Months"
    }
  },
  {
    id: "pull-cord-rope",
    name: "Pull Cord Rope (CAI-PCR-225)",
    shortDescription: "High-visibility, low-stretch safety rope for emergency stop activation.",
    description: "An essential accessory for conveyor safety, this high-visibility rope is installed along the full length of the conveyor. When pulled, it instantly activates the pull cord switch to ensure the immediate shutdown of equipment and protection of personnel.",
    image: pullCordRope,
    features: [
      "UV resistant PVC insulation in high-visibility red",
      "Low-stretch characteristics for instant response",
      "Oil, grease, and weather resistant",
      "High tensile strength steel wire core",
      "Fail-safe mechanical robustness"
    ],
    applications: [
      "Belt conveyor safety lines",
      "Industrial production lines",
      "Mining and bulk handling sites",
      "Outdoor material transport"
    ],
    specifications: {
      "Model": "CAI-PCR-225",
      "MOC": "Steel Wire Rope with PVC Insulation",
      "Diameter": "4 mm / 5 mm / 6 mm",
      "Breaking Strength": "300 – 800 kg (diameter dependent)",
      "Temp Range": "-20°C to +60°C",
      "Humidity": "Up to 95% RH",
      "Compliance": "ISO 9001 / Conveyor Safety Standards",
      "Maintenance": "Low maintenance design"
    }
  },
  {
    id: "industrial-carbon-brush",
    name: "Industrial Carbon Brush (CAI-J2204)",
    shortDescription: "High-performance electrical current transfer for rotating machines.",
    description: "Precision-molded carbon brushes designed for stable, low-sparking commutation in motors and generators. Available in multiple grades like Metal Graphite and Silver Graphite to suit specific conductivity and friction requirements.",
    image: industrialCarbonBrush,
    features: [
      "Low wear rate for long service life",
      "High current density capability",
      "Stable commutation with minimal sparking",
      "Precision machined to IEC/OEM standards",
      "Natural air cooling compatible"
    ],
    applications: [
      "Industrial Motors & Generators",
      "Alternators and Slip Rings",
      "Heavy-duty rotating machines",
      "Wind turbine generators"
    ],
    specifications: {
      "Model/Grade": "CAI-J2204 (Metal Graphite)",
      "Resistivity": "0.62 μΩ·m",
      "Flexural Strength": "42 MPa",
      "Hardness": "~Rockwell 89",
      "Density": "~4.04 g/cm³",
      "Voltage Drop": "0.61 – 1.6 V",
      "Max Surface Speed": "20 m/s",
      "Operating Temp": "-20°C to +120°C"
    }
  },
  {
    id: "belt-sway-switch",
    name: "Belt Sway Switch (CAI-BSS-221)",
    shortDescription: "Conveyor belt alignment monitoring and damage prevention.",
    description: "A safety device that monitors belt alignment to prevent damage caused by deviation or excessive sway. If the belt edge deflects beyond the preset angle, the switch triggers an alarm or stops the conveyor to prevent material spillage and accidents.",
    image: beltSwaySwitch,
    features: [
      "Automatic reset (spring-return) mechanism",
      "Snap action switching for instantaneous response",
      "Heavy-duty die-cast aluminum or polymer housing",
      "Dustproof and water-resistant (IP65)",
      "Adjustable roller mount for precise clearance"
    ],
    applications: [
      "Mining conveyor systems",
      "Cement and steel plant conveyors",
      "Power plant coal handling",
      "Port and terminal bulk handling"
    ],
    specifications: {
      "Model": "CAI-BSS-221",
      "Operating Principle": "Tilt sensing via roller/lever",
      "Switching Angles": "Maximum 70°",
      "Operating Torque": "3.4 – 5.4 Nm",
      "Contact Config": "1NO+1NC / 2NO+2NC",
      "Protection": "IP65",
      "Operating Temp": "-20°C to +60°C",
      "Warranty": "12 Months"
    }
  },
  {
    id: "electro-hydraulic-thruster",
    name: "Electro-Hydraulic Thruster (CAI-EHT-222)",
    shortDescription: "Self-contained drive unit for linear mechanical motion and braking.",
    description: "The CAI-EHT-222 is a self-contained unit that converts electrical energy into hydraulic pressure to produce precise linear motion. It is engineered for heavy-duty industrial applications such as operating drum brakes, disc brakes, gates, and dampers.",
    image: electricHydraulicThruster,
    features: [
      "Self-contained oil-filled system with sealed hydraulic circuit",
      "Heavy-duty cast aluminum/steel body construction",
      "IP65 Ingress Protection for harsh environments",
      "Class F/H Insulation for high-temperature reliability",
      "Integrated overload protection and mechanical safety stops"
    ],
    applications: [
      "Industrial Drum and Disc Brakes",
      "Gate and Damper operation",
      "Lifting mechanisms",
      "Moving machinery control"
    ],
    specifications: {
      "Model": "CAI-EHT-222",
      "Rated Voltage": "415 V AC ±10% (3 Phase)",
      "Power Rating": "0.18 kW to 2.2 kW",
      "Stroke Length": "25 mm to 120 mm",
      "Torque": "Up to 125 Nm",
      "Duty Class": "S1 / S3 (Continuous/Intermittent)",
      "Protection": "IP65",
      "Operating Temp": "-10°C to +60°C"
    }
  },
  {
    id: "industrial-joystick-controller",
    name: "Industrial Joystick Controller",
    shortDescription: "Precision manual controller for motors, actuators, and drives.",
    description: "A manually operated control device designed for precise directional control of industrial machinery. It converts mechanical movement into electrical signals to manage motors, actuators, or variable-speed drives with high accuracy.",
    image: joystickController,
    features: [
      "Momentary or Maintained switching types",
      "Silver alloy contacts for superior conductivity",
      "Robust insulation resistance (≥ 100 MΩ at 500 V DC)",
      "High-durability digital contact type",
      "Ergonomic design for operator precision"
    ],
    applications: [
      "Crane and Hoist controls",
      "Material handling equipment",
      "Actuator positioning",
      "Variable speed drive interface"
    ],
    specifications: {
      "Rated Voltage": "24 V DC / 110 Vac / 220 Vac",
      "Rated Current": "5 A (max per contact)",
      "Signal Type": "Analog (4-20mA) / 0-10 VDC Digital",
      "Contact Material": "Silver Alloy",
      "Switching Type": "Momentary / Maintained",
      "Insulation Resistance": "≥ 100 MΩ @ 500 V DC"
    }
  },
  {
    id: "industrial-drum-heater",
    name: "Industrial Drum Heater",
    shortDescription: "High-efficiency vertical drum heating with digital temperature control.",
    description: "Developed for heating standard 200 Ltr drums in a vertical position. It features a robust metal casing with castors and hinges for easy slip-into position. The elements are backed by 50mm thick ceramic wool insulation to ensure maximum thermal efficiency. Includes a digital temperature controller with contactor and a lid to reduce heat loss.",
    image: industrialDrumHeater,
    features: [
      "50mm thick ceramic wool insulation (100Kg/M3)",
      "Digital temperature controller with contactor",
      "Robust metal casing with powder coating",
      "Mobile design with castors and hinges",
      "Integrated lid to reduce heat loss and drought"
    ],
    applications: [
      "Viscosity control of oils and chemicals",
      "Food processing (melting fats/syrups)",
      "Industrial paint and resin heating",
      "Chemical storage maintenance"
    ],
    specifications: {
      "Drum Capacity": "Standard 200 Ltr Drum",
      "Drum Diameter": "585 mm (Over Rolling Rings)",
      "Drum Height": "930 mm",
      "Heater Capacity": "9.0 KW",
      "Working Voltage": "415V, Three Phase",
      "Insulation": "Ceramic Wool 100Kg/M3",
      "Construction": "1.6 mm thick powder coated",
      "Weight": "95 Kgs",
      "Overall Height": "1010 mm (with Castors)"
    }
  },
  {
    id: "resistance-box",
    name: "Resistance Box",
    shortDescription: "Electrical resistance unit for motor starting and speed control.",
    description: "This device contains fixed or variable resistors used to introduce known resistance into a circuit. It is primarily used with electric motors for controlled starting, braking, speed control, or load simulation.",
    image: resistanceBox,
    features: [
      "Nickel-Chromium (Ni-Cr) alloy wire/strip for stability",
      "Multiple stepping options (up to 12 steps)",
      "Customizable power ratings for specific motor loads",
      "High voltage compatibility up to 690V",
      "Heavy-duty ventilated enclosure"
    ],
    applications: [
      "Slip ring motor starting",
      "Dynamic braking resistors",
      "Load bank simulation",
      "Speed control for heavy motors"
    ],
    specifications: {
      "Range (per phase)": "0.1 Ω to 50 Ω",
      "No of Steps": "3 / 4 / 5 / 6 / Up to 12 Step",
      "Voltage": "Up to 415 / 690 V",
      "MOC of Resistance": "Nickel-Chromium (Ni-Cr) Alloy",
      "Power Rating": "Customizable based on application"
    }
  },
  {
    id: "dsl-busbar-system",
    name: "DSL Busbar System",
    shortDescription: "Insulated conductor rail for power transmission to moving equipment.",
    description: "The Down Shop Lead (DSL) Insulated Busbar System provides safe and continuous power transmission to mobile machinery. It consists of PVC-insulated copper or aluminum conductors, current collectors, and joint assemblies.",
    image: dslBusbar,
    features: [
      "PVC-insulated conductors for operator safety",
      "High current carrying capacity up to 1600 Amp",
      "Corrosion-resistant Alu/Cu material options",
      "Continuous power supply without cable drag",
      "FRP/PVC insulation for durability"
    ],
    applications: [
      "EOT Cranes and Hoists",
      "Monorails and Conveyors",
      "Shuttle Conveyors",
      "Moving industrial machinery"
    ],
    specifications: {
      "Type": "Down Shop Lead (DSL) Insulated Busbar",
      "Rated Voltage": "Up to 660 V AC",
      "Rated Current": "Up to 1600 Amp",
      "MOC": "Aluminum (Alu) / Copper (Cu)",
      "Insulation": "FRP / PVC",
      "Application": "Moving machinery power supply"
    }
  },
{
    id: "copper-coil-current-collector",
    name: "Copper Coil Current Collector",
    shortDescription: "Metallic conductive brass/copper assembly for power collection.",
    description: "Current collectors are metallic conductive brass and electrolytic copper assemblies used to collect current between the power busbar and the moving machine electrical circuit. Designed for high-duty applications requiring reliable power transmission.",
    image: currentCollector,
    features: [
      "High-conductivity Electrolytic Copper and alloy construction",
      "Robust spring-loaded design for constant contact",
      "Compatible with multiple moving machine types",
      "High current carrying capacity up to 800 Amp",
      "Durable metallic conductive brass components"
    ],
    applications: [
      "EOT Cranes and Hoists",
      "Monorails and Shuttle Conveyors",
      "Moving industrial machine electrical circuits",
      "High-speed power transmission lines"
    ],
    specifications: {
      "Material": "Electrolytic Copper and alloy",
      "Rated Voltage": "Up to 660 Vac",
      "Rated Current": "Up to 800 Amp",
      "Application Type": "Power collection for moving machinery",
      "Compatible Systems": "EOT Cranes, Monorails, Hoists"
    }
  },
  {
    id: "earth-current-collector",
    name: "Earth Current Collector (ECC)",
    shortDescription: "Safety grounding path for moving machinery.",
    description: "The Earth Current Collector (ECC) is a specialized collecting device that provides a safe electrical path between a moving machine and the surrounding soil. It ensures that short circuit currents are directed easily and safely into the ground.",
    image: earthCurrentCollector,
    features: [
      "High-conductivity copper (≥99.9%)",
      "Ensures safety during short circuit events",
      "Customizable collector sizes for specific machine frames",
      "Continuous current capacity up to 50 A",
      "Industrial grade spring-tensioned mounting"
    ],
    applications: [
      "Moving machinery grounding",
      "Short circuit current protection",
      "Safety earthing for cranes and trolleys",
      "Industrial soil-to-machine bonding"
    ],
    specifications: {
      "Rated Current Capacity": "Up to 50 A (continuous)",
      "Collector Material": "High-conductivity copper (≥99.9%)",
      "Copper Conductivity": "≥ 58 MS/m",
      "Collector Size": "200x 300 mm (customizable)",
      "Copper Strip Size": "25 x 3 mm / 50 x 6 mm (typical)",
      "Cable Size": "16 mm² – 70 mm² Cu"
    }
  },
  {
    id: "welding-db",
    name: "Welding Distribution Board (Welding DB)",
    shortDescription: "Safe power distribution for multiple welding machines.",
    description: "The Welding DB is designed to safely distribute electrical power to multiple welding machines simultaneously. It provides critical protection, isolation, and reliable power distribution in rugged industrial environments.",
    image: weldingDistributionBox,
    features: [
      "Integrated ELCB or RCCB for earth leakage protection",
      "MCCB / Isolator for incoming supply control",
      "High short-circuit withstand capacity (25 ka)",
      "Multi-phase distribution (3 Phase + Neutral + Earth)",
      "Weather-resistant industrial enclosure"
    ],
    applications: [
      "Construction sites",
      "Fabrication shops",
      "Shipyards and heavy engineering zones",
      "Multi-user welding workstations"
    ],
    specifications: {
      "Rated Voltage": "415 V AC",
      "Frequency": "50 Hz",
      "Phase": "3 Phase + Neutral + Earth",
      "Rated Current": "63 A / 100 A / 125 A / 200 A (as required)",
      "Protection Device": "ELCB OR RCCB",
      "Earth Leakage Limit": "30-40 ma",
      "Short Circuit Withstand": "25 ka (typical)",
      "Incoming Supply": "MCCB / Isolator"
    }
  },
  {
    id: "industrial-load-cell",
    name: "Industrial Load Cell",
    shortDescription: "Strain-gauge transducer for high-capacity force measurement.",
    description: "A high-precision transducer that converts applied mechanical force or weight into a proportional electrical signal. These industrial-grade cells utilize advanced strain gauge technology to ensure accuracy in heavy-duty weighing environments.",
    image: loadCell,
    features: [
      "Advanced strain gauge technology",
      "High insulation resistance (≥ 5000 MΩ)",
      "Precision zero-balance maintenance",
      "Robust construction for high-tonnage capacity",
      "Stable output signal even in industrial vibration"
    ],
    applications: [
      "Weighbridges and silos",
      "Industrial platform scales",
      "Tension and force measurement",
      "Heavy-duty lifting and crane scales"
    ],
    specifications: {
      "Capacity": "Up to 100 ton",
      "Rated Output": "2.0 ± 0.2 mV/V",
      "Zero Balance": "±1 % of Rated Output",
      "Input Resistance": "380 ± 10 Ω",
      "Output Resistance": "350 ± 5 Ω",
      "Insulation Resistance": "≥ 5000 MΩ (at 50 V DC)"
    }
  },
{
    id: "discharge-rod",
    name: "Discharge Rod",
    shortDescription: "Safety tool for discharging residual electrical energy.",
    description: "The Discharge Rod is used to safely discharge residual electrical energy from high-voltage equipment, capacitors, bus bars, switchgear, and transmission systems before maintenance or inspection. It provides a controlled path to earth, ensuring maximum safety for personnel.",
    image: dischargeRod,
    features: [
      "Passive device requiring no external power",
      "Static charge dissipation to earth",
      "Copper earthing cable and lug provided",
      "High-durability insulated handle",
      "Essential for high-voltage maintenance safety"
    ],
    applications: [
      "Substation maintenance",
      "Capacitor bank discharging",
      "Switchgear inspection",
      "Transmission system earthing"
    ],
    specifications: {
      "Operating Principle": "Static charge dissipation to earth",
      "Operating Voltage": "High Voltage compatible (Passive)",
      "Electrical Resistance": "≤ 1 MΩ (to ground)",
      "Earthing Connection": "Copper earthing cable / lug provided",
      "Safety Standard": "Industrial Electrical Safety compliant"
    }
  },
  {
    id: "eot-crane",
    name: "EOT Crane (Electric Overhead Traveling Crane)",
    shortDescription: "Heavy-duty single/double girder material handling crane.",
    description: "Designed for both indoor and outdoor material handling, these cranes are available in Single Girder and Double Girder configurations. They can be operated via Pendant, Radio Remote, or Cabin control, providing versatile solutions for heavy lifting.",
    image: eotCrane,
    features: [
      "Single and Double Girder options",
      "Pendant, Radio Remote, or Cabin operation",
      "Seamless machined steel drum",
      "4/5 Step speed control through Resistance Box",
      "Integrated Thruster / Electromagnetic braking"
    ],
    applications: [
      "Steel mills and foundries",
      "Heavy fabrication shops",
      "Warehousing and logistics",
      "Power plant turbine halls"
    ],
    specifications: {
      "Safe Working Load (SWL)": "Up to 63 TON",
      "Duty Class": "IS 3177 / IS 807 / FEM / CMAA",
      "Design Standard": "IS 3177 & IS 807",
      "Temperature Range": "-10°C to +50°C",
      "Hoist Type": "Wire Rope Hoist",
      "Speed Control": "4/5 Step through Resistance Box",
      "Braking": "Thruster / Electromagnetic"
    }
  },
  {
    id: "manual-chain-hoist",
    name: "Chain Block / Manual Chain Hoist",
    shortDescription: "Manually operated vertical lifting device.",
    description: "A robust manually operated lifting device used for vertical load lifting. It features a hand chain mechanism with hardened load chains for smooth and safe operation in workshops, construction sites, and industrial plants.",
    image: chainBlockHoist,
    features: [
      "Hardened Grade 80 alloy steel load chains",
      "Galvanized steel hand chain for corrosion resistance",
      "Smooth manual mechanism for precision lifting",
      "Compact and portable design",
      "Wide range of lifting capacities"
    ],
    applications: [
      "Workshop maintenance",
      "Construction site lifting",
      "Warehouse loading",
      "Industrial plant assembly"
    ],
    specifications: {
      "Product Type": "Manual Chain Block / Chain Pulley Block",
      "Lifting Capacity": "0.5 / 1 / 2 / 3 / 5 / 10 / 20 Ton",
      "Standard Lifting Height": "3 m (Optional: 6m, 9m, 12m+)",
      "Load Chain Material": "Alloy Steel, Grade 80",
      "Hand Chain Material": "Galvanized Steel",
      "Load Chain Dia": "As per capacity"
    }
  },
  {
    id: "wave-sling",
    name: "Wave Sling",
    shortDescription: "High-tenacity polyester lifting sling with corrugated profile.",
    description: "The Wave Sling is a wire-rope style lifting sling featuring a waved (corrugated) outer profile. It is designed specifically for high load capacity, superior flexibility, and enhanced grip during demanding lifting operations.",
    image: waveSling,
    features: [
      "High tenacity polyester construction",
      "Corrugated (waved) profile for superior grip",
      "High flexibility for complex load shapes",
      "Customizable lengths and tonnages",
      "Lightweight yet extremely strong"
    ],
    applications: [
      "High-capacity rigging",
      "Heavy machinery transport",
      "Construction material lifting",
      "Sensitive load handling"
    ],
    specifications: {
      "Material of Construction (MOC)": "High Tenacity Polyester",
      "Tones / Capacity": "Customizable",
      "Length": "Customizable",
      "Size": "Customizable",
      "Profile Type": "Waved / Corrugated"
    }
  },
  {
    id: "heat-resistant-fire-sleeve",
    name: "Heat Resistant Fire Sleeve",
    shortDescription: "Protective tubular sleeve for extreme heat and flame exposure.",
    description: "A specialized protective sleeve designed to shield hoses, cables, and wires from extreme heat, direct flame exposure, and molten metal splash. Constructed from a high-quality fiberglass braid coated with thick high-temperature silicone rubber.",
    image: heatResistantFireSleeve,
    features: [
      "Shields against molten metal splash and abrasion",
      "Self-extinguishing flame resistance",
      "Reduces heat radiation by up to 90%",
      "Low thermal conductivity",
      "Highly flexible for easy installation over existing wiring"
    ],
    applications: [
      "Steel plant furnace areas",
      "Foundry hose protection",
      "Engine manifold wiring",
      "Welding cable protection"
    ],
    specifications: {
      "Continuous Temp": "-54°C to +260°C",
      "Short-Term Temp": "Up to 1650°C (Direct flame exposure)",
      "Melting Point": "> 1000°C (Fiberglass core)",
      "Flame Resistance": "Self-extinguishing",
      "Heat Radiation Reduction": "Up to 90%",
      "Material": "Fiberglass braid with Silicone coating"
    }
  },
  {
    id: "industrial-hooter",
    name: "Industrial Hooter",
    shortDescription: "High-decibel audible warning device for industrial alerts.",
    description: "An electrically operated audible warning device engineered to produce loud, continuous sound for emergency signaling and process alerts. Available in both electro-mechanical and electronic variants to suit various industrial environments.",
    image: industrialHooter,
    features: [
      "High sound output (up to 120 dB)",
      "Continuous or intermittent sound types",
      "Long-range coverage up to 5 KM",
      "Robust construction for industrial duty",
      "Wide voltage tolerance (±10%)"
    ],
    applications: [
      "Emergency evacuation alarms",
      "Machine status indication",
      "Process completion alerts",
      "Safety perimeter signaling"
    ],
    specifications: {
      "Type": "Electro-mechanical / Electronic Hooter",
      "Rated Voltage": "24 V DC / 110 V AC / 230 V AC",
      "Sound Output": "90 dB to 120 dB @ 1 meter",
      "Frequency": "50 / 60 Hz",
      "Range": "UPTO 5 KM",
      "Voltage Tolerance": "±10%"
    }
  },
  {
    id: "industrial-plug-socket",
    name: "Industrial Plug & Socket",
    shortDescription: "High-performance electrical connectors for harsh environments.",
    description: "Designed for safe and stable power distribution in factories, construction sites, and mines. These connectors offer high protection ratings against water and dust, ensuring reliable operation under heavy electrical loads.",
    image: plugSocket,
    features: [
      "Available in IP44 and IP67 protection ratings",
      "Impact-resistant industrial housing",
      "Multiple pole configurations (3 Pole & 5 Pole)",
      "Wide range of current ratings up to 125A",
      "Standard-compliant for safe equipment connection"
    ],
    applications: [
      "Construction site power distribution",
      "Mining equipment power supply",
      "Industrial machinery maintenance",
      "Portable power tools"
    ],
    specifications: {
      "Rated Voltage (AC)": "24V to 660V",
      "Rated Voltage (DC)": "24V to 440V",
      "Rated Current": "16A, 32A, 63A, 125A",
      "Rated Frequency": "50-60Hz",
      "Poles": "3 Pole & 5 Pole",
      "Protection": "IP44 / IP67"
    }
  },
  {
    id: "hydraulic-hose",
    name: "Hydraulic Hose",
    shortDescription: "High-pressure fluid conveyance for industrial systems.",
    description: "Engineered for conveying hydraulic fluids such as mineral oils, lubricating oils, and water-glycol emulsions. These hoses are built to withstand high working pressures and extreme temperature fluctuations in mobile and industrial hydraulic systems.",
    image: hydraulicHose,
    features: [
      "High burst pressure safety margin (4x Working Pressure)",
      "Excellent fluid compatibility (Oil/Water-Glycol)",
      "Vacuum rating up to -0.9 bar",
      "Customizable lengths and bore sizes",
      "Durable outer cover for abrasion resistance"
    ],
    applications: [
      "Hydraulic power packs",
      "Earthmoving equipment",
      "Industrial press systems",
      "Mobile hydraulic machinery"
    ],
    specifications: {
      "Nominal Bore": "6 mm to 50 mm (1/4\" to 2\")",
      "Working Pressure": "Up to 420 bar (Customizable)",
      "Burst Pressure": "Minimum 4 × Working Pressure",
      "Vacuum Rating": "Up to -0.9 bar",
      "Temp Range": "-40°C to +100°C (+120°C Intermittent)",
      "Fluid Compatibility": "Hydraulic oil, mineral oil, water-glycol"
    }
  },
{
    id: "hydraulic-fitting",
    name: "Hydraulic Fitting",
    shortDescription: "Precision-engineered components for leak-free fluid transfer.",
    description: "These precision-engineered components are designed to connect hoses, tubes, and pipes within hydraulic systems. They ensure reliable, leak-free fluid transfer even under high-pressure conditions across various industrial standards.",
    image: hydraulicFitting,
    features: [
      "Precision-machined for high-pressure reliability",
      "Leak-free fluid transfer design",
      "Available in multiple connection standards (BSPP, JIC, ORFS, NPT)",
      "Robust construction for industrial hydraulic systems",
      "Wide range of configurations (Straight, Elbow, Tee)"
    ],
    applications: [
      "Industrial hydraulic power units",
      "High-pressure hose assemblies",
      "Automotive and mobile hydraulics",
      "Oil and gas fluid management"
    ],
    specifications: {
      "Straight/Elbow Standards": "BSPP / BSPT / JIC 37° Flare / NPT / NPTF",
      "Tee/Adapter Standards": "ORFS (SAE J1453) / NPT / NPTF",
      "Bulkhead Fitting": "DIN 2353",
      "Connection Flexibility": "Optional standards as per requirement",
      "Application Type": "High-pressure fluid transfer"
    }
  },
  {
    id: "smoke-sensor",
    name: "Smoke Sensor",
    shortDescription: "High-sensitivity device for early fire detection.",
    description: "Designed to detect the presence of smoke particles in the air and generate a switch or alarm output instantly. This sensor focuses specifically on smoke detection for fire safety and facility monitoring systems.",
    image: smokeSensor,
    features: [
      "High-sensitivity smoke particle detection",
      "Instant alarm/switch output",
      "Compact and modern design",
      "Integrated with facility monitoring systems",
      "Available in multiple identification types (IP Based/Addressable)"
    ],
    applications: [
      "Industrial warehouses",
      "Electrical control rooms",
      "Commercial office buildings",
      "Safety monitoring systems"
    ],
    specifications: {
      "Condition Monitored": "Smoke only (Does not detect gas/heat/flame)",
      "Type": "Switch-type smoke detector",
      "Operating Voltage": "12 VDC or 24 VDC",
      "Voltage Range": "8.5 V to 35 V",
      "Identification": "IP Based / Addressable / Conventional"
    }
  },
  {
    id: "motion-sensor",
    name: "Motion Sensor",
    shortDescription: "Passive Infrared (PIR) sensor for automation and security.",
    description: "A Passive Infrared (PIR) based device designed to detect the movement of human bodies or warm objects within a defined area. It provides an electrical output for automation, security, lighting control, and industrial applications.",
    image: motionSensor,
    features: [
      "Passive Infrared (PIR) technology",
      "Adjustable detection range (6–12 m)",
      "Wide detection angle up to 180°",
      "Ultra-low power consumption (≤ 1 W)",
      "Versatile output types (Relay/NPN/PNP)"
    ],
    applications: [
      "Industrial lighting automation",
      "Security and intrusion detection",
      "Automated door systems",
      "Energy management systems"
    ],
    specifications: {
      "Sensor Type": "Passive Infrared (PIR)",
      "Detection Range": "6–12 m (adjustable)",
      "Detection Angle": "90° – 180° (model dependent)",
      "Supply Voltage": "12–24 V DC / 110–240 V AC",
      "Power Consumption": "≤ 1 W",
      "Output Type": "Relay / NPN / PNP (model dependent)"
    }
  },
  {
    id: "winch-machine",
    name: "Winch Machine",
    shortDescription: "Mechanical device for pulling, lifting, or lowering heavy loads.",
    description: "A heavy-duty mechanical device used for pulling, lifting, or lowering loads by binding wire rope or chain around a rotating drum. Extensively used in mining, construction, marine, and conveyor systems.",
    image: winchMachine,
    features: [
      "Available in Electric, Hydraulic, or Manual drive",
      "Customizable rated load capacity up to 50 Tons",
      "High-capacity wire rope drum",
      "Robust construction for harsh environments",
      "Precision speed control for safe load handling"
    ],
    applications: [
      "Mining and excavation",
      "Marine and port handling",
      "Construction site lifting",
      "Conveyor tensioning systems"
    ],
    specifications: {
      "Type": "Electric / Hydraulic / Manual",
      "Rated Load Capacity": "1 Ton to 50 Tons (customizable)",
      "Line Pull (First Layer)": "As per rated capacity",
      "Winch Line Speed": "5 – 30 m/min",
      "Drum Capacity": "50 – 500 m wire rope (Customizable)",
      "Drum Diameter": "200 – 800 mm"
    }
  },
{
    id: "electromagnetic-flow-meter",
    name: "Electromagnetic Flow Meter",
    shortDescription: "Precision volumetric flow measurement for conductive liquids.",
    description: "Operating on Faraday's Law of Electromagnetic Induction, this meter measures the flow velocity of conductive liquids. When liquid flows through a magnetic field, a voltage proportional to the velocity is induced and measured by electrodes, providing accurate, bi-directional flow data.",
    image: electromagneticFlowMeter,
    features: [
      "Faraday's Law based induction technology",
      "Bi-directional measurement range",
      "High repeatability of ±0.1%",
      "Customizable flow ranges to suit specific processes",
      "Wide diameter compatibility (DN 15 to DN 2000)"
    ],
    applications: [
      "Water and wastewater management",
      "Chemical processing plants",
      "Food and beverage industry",
      "Slurry and pulp flow monitoring"
    ],
    specifications: {
      "Measuring Principle": "Electromagnetic",
      "Flow Velocity Range": "0.1 to 10 m/s",
      "Accuracy": "±0.5% of reading (±0.2% optional)",
      "Nominal Diameter": "DN 15 to DN 2000 (1/2\" to 80\")",
      "Measuring Range": "Bi-directional"
    }
  },
  {
    id: "spring-balancer",
    name: "Spring Balancer",
    shortDescription: "Ergonomic tool suspension for weightless load handling.",
    description: "A mechanical device designed to suspend tools and loads, automatically balancing their weight to reduce operator fatigue. It allows for smooth vertical movement and holds the load at any desired position, improving safety and efficiency in workstations.",
    image: springBalancer,
    features: [
      "Spring-loaded mechanical balancing mechanism",
      "Adjustable tension to match tool weight",
      "High-strength steel wire rope suspension",
      "Durable die-cast aluminum or steel body",
      "Safety lock mechanism to prevent accidental drops"
    ],
    applications: [
      "Assembly lines and workstations",
      "Pneumatic tool suspension",
      "Heavy welding gun handling",
      "Repetitive lifting tasks"
    ],
    specifications: {
      "Type": "Spring-loaded mechanical balancer",
      "Load Capacity Range": "0.5 – 120 kg (model dependent)",
      "Stroke / Cable Travel": "Up to 2.5 meters",
      "Suspension Type": "Steel wire rope",
      "Cable Diameter": "2.5 – 5 mm",
      "Body Material": "Die-cast aluminum / steel"
    }
  },
  {
    id: "industrial-fan",
    name: "Industrial Fan (CAI-IF-220)",
    shortDescription: "Heavy-duty ventilation and process air handling system.",
    description: "The CAI-IF-220 is a heavy-duty mechanical device engineered to move large volumes of air. It is essential for industrial ventilation, cooling, exhaust, and dust/fume extraction in workshops and plants, ensuring a safe and controlled environment.",
    image: industrialCoolingFan,
    features: [
      "Available in Axial, Centrifugal, and HVLS variants",
      "High-performance EN8 / EN19 steel shafts",
      "Powder-coated MS or Stainless Steel casing options",
      "Fail-safe operation with IP65 protection",
      "Customizable airflow up to 500,000+ CFM"
    ],
    applications: [
      "Plant ventilation and cooling",
      "Dust and fume extraction",
      "Process air handling",
      "Workshop exhaust systems"
    ],
    specifications: {
      "Model": "CAI-IF-220",
      "Type": "Axial / Centrifugal / Blower / Exhaust / HVLS",
      "Airflow": "1,000 to 500,000+ CFM",
      "Static Pressure": "10 to 2,000+ Pa",
      "Speed": "720 / 960 / 1440 / 2900 RPM",
      "Motor Power": "0.25 HP to 500 HP+",
      "Voltage": "415 V, 3-phase (Standard)",
      "Impeller Material": "MS / Aluminum / Stainless Steel",
      "Protection": "IP65"
    }
  },
  {
    id: "Infrared-temperature-sensor",
    name: "Online Infrared Temperature Sensor (CAI600-400A)",
    shortDescription: "Non-contact infrared surface temperature measurement system.",
    description: "The CAI600-400A is a high-precision online infrared sensor that calculates surface temperature by measuring the intensity of infrared radiation emitted by a target without physical contact. Encased in 304 Stainless Steel, it is designed for stable, long-life operation in automation control and detection systems.",
    image: infraredTemperatureSensor,
    features: [
      "Non-contact measurement prevents target damage or contamination",
      "Compact 304 Stainless Steel housing (119mm x 18.7mm)",
      "Fast 300 ms response time for real-time monitoring",
      "Stable 4-20mA or RS485 signal output",
      "Wide ambient operating temperature (0~60°C)"
    ],
    applications: [
      "Power equipment monitoring",
      "Metallurgy and metal processing",
      "Construction material manufacturing",
      "Chemical industry automation"
    ],
    specifications: {
      "Model": "CAI600-400A",
      "Measuring Range": "0~100°C up to 1200°C (Selectable)",
      "Accuracy": "±2% of measured value or ±2°C",
      "Optical Resolution": "20:1",
      "Response Time": "300 ms",
      "Output Signal": "4-20mA / RS485",
      "Supply Voltage": "10-30VDC",
      "Protection Level": "IP65 (NEMA 4)"
    }
  },
  {
    id: "monocrystalline-silicon-pressure-transmitter",
    name: "Pressure Transmitter (CAI7961T Series)",
    shortDescription: "High-precision transmitter with German MEMS technology.",
    description: "The CAI7961T Series utilizes high-quality German MEMS monocrystalline silicon sensor chips and an innovative dual-beam suspended design. It provides intelligent static pressure and temperature compensation to ensure high accuracy (±0.075%) and stability across a wide range of operating pressures.",
    image: pressureTransmitter,
    features: [
      "German MEMS monocrystalline silicon sensor technology",
      "HART 7 protocol and Bluetooth wireless connectivity",
      "Backlit LCD display with dual-button local adjustment",
      "Comprehensive self-diagnostic functionality",
      "Remote debugging via mobile app or configuration software"
    ],
    applications: [
      "Oil and Gas process control",
      "Chemical and Petrochemical plants",
      "Power generation facilities",
      "Water and wastewater treatment"
    ],
    specifications: {
      "Model": "CAI7961TGS/AS",
      "Precision": "±0.075%",
      "Range": "-0.1 to 40 MPa",
      "Turndown Ratio": "60:1",
      "Output": "4-20mA 24V DC / HART 7",
      "Wetted Materials": "316L Stainless Steel / Hastelloy C-276",
      "Safety Certs": "SIL2 / Explosion-proof (Ex db IIC T6 Gb)",
      "Filling Liquid": "Silicone oil / Fluorinated oil"
    }
  }


  // {
  //   id: "pullCordSwitchLamp",
  //   name: "Pull Cord Switch Lamp",
  //   shortDescription: "Indicator lamp for pull cord switch status monitoring.",
  //   description: "The Pull Cord Switch Lamp provides visual status indication for pull cord switch systems, making it easy to identify triggered conditions from a distance.",
  //   image: pullCordSwitchLamp,
  //   features: ["LED status indication", "Universal mounting", "High visibility", "Low power consumption"],
  //   applications: ["Conveyor safety systems", "Industrial controls", "Process monitoring"],
  //   specifications: { "Voltage": "24V DC / 110V AC", "Color": "Red / Green / Yellow", "Protection Rating": "IP65", "Power": "<5W", "Mounting": "Panel / DIN rail" }
  // }
];
