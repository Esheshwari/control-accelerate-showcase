import pullCordSwitch from "@/assets/products/pull-cord-switch.jpg";
import beltSwaySwitch from "@/assets/products/belt-sway-switch.jpg";
import zeroSpeedSwitch from "@/assets/products/zero-speed-switch.jpg";
import beltTearSwitch from "@/assets/products/belt-tear-switch.jpg";
import limitSwitch from "@/assets/products/limit-switch.jpg";
import safetySwitch from "@/assets/products/safety-switch.jpg";
import industrialThermostat from "@/assets/products/industrial-thermostat.jpg";
import temperatureController from "@/assets/products/temperature-controller.jpg";
import industrialHeater from "@/assets/products/industrial-heater.jpg";
import controlPanel from "@/assets/products/control-panel.jpg";
import industrialSensors from "@/assets/products/industrial-sensors.jpg";
import levelSwitch from "@/assets/products/level-switch.jpg";
import rotarySwitch from "@/assets/products/rotary-switch.jpg";
import digitalTempController from "@/assets/products/digital-temperature-controller.jpg";
import conveyorSafetySwitch from "@/assets/products/conveyor-safety-switch.jpg";
import industrialControlSystem from "@/assets/products/industrial-control-system.jpg";

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
    name: "Pull Cord Switch",
    shortDescription: "Emergency stop pull cord switch for conveyor belt safety systems.",
    description: "The Pull Cord Switch is a critical safety device designed for emergency stopping of conveyor belts. It allows operators to halt conveyor operations from any point along the belt by pulling the attached cord. Built with heavy-duty construction, it ensures reliable performance in harsh industrial environments.",
    image: pullCordSwitch,
    features: ["Heavy-duty die-cast aluminum housing", "IP65 weather protection", "Manual reset mechanism", "Visual indicator for trip status", "Adjustable cord tension", "Easy installation and maintenance"],
    applications: ["Mining conveyor systems", "Cement plants", "Steel manufacturing", "Power plants", "Port & terminal operations", "Bulk material handling"],
    specifications: { "Housing Material": "Die-cast Aluminum", "Protection Rating": "IP65", "Operating Voltage": "240V AC / 24V DC", "Contact Rating": "10A @ 240V AC", "Operating Temperature": "-25°C to +70°C", "Cable Length": "Up to 100m" }
  },
  {
    id: "belt-sway-switch",
    name: "Belt Sway Switch",
    shortDescription: "Monitors belt alignment and prevents damage from belt misalignment.",
    description: "The Belt Sway Switch monitors conveyor belt alignment and triggers an alarm or shutdown when the belt drifts beyond acceptable limits. This prevents belt damage, material spillage, and structural harm to the conveyor system.",
    image: beltSwaySwitch,
    features: ["Dual-stage alarm system", "Adjustable activation angle", "Heavy-duty roller arm", "Weather-resistant enclosure", "LED status indication", "Self-aligning mounting bracket"],
    applications: ["Mining operations", "Thermal power plants", "Cement industry", "Steel plants", "Fertilizer plants", "Aggregate processing"],
    specifications: { "Housing Material": "Die-cast Aluminum", "Protection Rating": "IP65", "Activation Angle": "10° to 35°", "Contact Rating": "10A @ 240V AC", "Operating Temperature": "-25°C to +70°C", "Mounting": "Universal bracket" }
  },
  {
    id: "zero-speed-switch",
    name: "Zero Speed Switch",
    shortDescription: "Detects underspeed conditions in rotating equipment and conveyors.",
    description: "The Zero Speed Switch is an electronic speed monitoring device that detects underspeed or zero-speed conditions in rotating machinery. It provides early warning of belt slippage, motor failure, or mechanical blockages, helping prevent costly equipment damage.",
    image: zeroSpeedSwitch,
    features: ["Adjustable speed threshold", "Pulse sensing technology", "Time delay adjustment", "LED speed indication", "Relay output", "Compact design"],
    applications: ["Conveyor belt monitoring", "Bucket elevators", "Rotary kilns", "Crushers & screens", "Fan & blower systems", "Screw conveyors"],
    specifications: { "Sensing Method": "Magnetic proximity", "Speed Range": "0.5 to 3000 RPM", "Time Delay": "1 to 30 seconds", "Supply Voltage": "24V DC / 230V AC", "Output": "DPDT Relay", "Protection Rating": "IP65" }
  },
  {
    id: "belt-tear-switch",
    name: "Belt Tear Switch",
    shortDescription: "Detects conveyor belt tears and rips to prevent catastrophic damage.",
    description: "The Belt Tear Switch is designed to detect longitudinal rips or tears in conveyor belts. When a tear occurs, the sensor detects material spillage or belt deformation and immediately triggers a shutdown, preventing catastrophic belt damage and material loss.",
    image: beltTearSwitch,
    features: ["High sensitivity detection", "Quick response time", "Robust construction", "Manual reset option", "Weather-proof housing", "Easy calibration"],
    applications: ["Mining conveyors", "Coal handling plants", "Ore processing", "Port bulk terminals", "Quarry operations", "Steel plant conveyors"],
    specifications: { "Detection Method": "Mechanical lever", "Housing Material": "Cast aluminum", "Protection Rating": "IP65", "Contact Rating": "10A @ 240V AC", "Response Time": "<100ms", "Operating Temperature": "-20°C to +65°C" }
  },
  {
    id: "limit-switch",
    name: "Limit Switch",
    shortDescription: "Heavy-duty limit switches for position detection and machine control.",
    description: "Our Industrial Limit Switches are precision-engineered position-sensing devices used for detecting the presence, absence, or position of an object. They are essential for machine control, safety interlocking, and process automation in demanding industrial environments.",
    image: limitSwitch,
    features: ["Multiple actuator types available", "Snap-action contacts", "High mechanical durability", "IP67 protection", "Wide temperature range", "Compact footprint"],
    applications: ["CNC machines", "Packaging equipment", "Material handling", "Automated doors & gates", "Crane & hoist systems", "Robotics"],
    specifications: { "Contact Configuration": "SPDT / DPDT", "Mechanical Life": "10 million operations", "Electrical Rating": "10A @ 250V AC", "Protection Rating": "IP67", "Operating Temperature": "-25°C to +80°C", "Actuator Types": "Roller, plunger, lever" }
  },
  {
    id: "safety-switch",
    name: "Safety Switch",
    shortDescription: "Electrical safety interlock switches for machine guarding applications.",
    description: "Safety Switches provide reliable safety interlocking for machine guards, access doors, and protective barriers. They ensure that hazardous machinery cannot operate when guards are open, protecting personnel from injury.",
    image: safetySwitch,
    features: ["Positive break contacts", "Tamper-proof design", "Multiple key patterns", "Door monitoring capability", "Solenoid locking option", "Category 4 safety rating"],
    applications: ["Machine guarding", "Access door interlocking", "Conveyor covers", "Robot cell fencing", "Packaging machines", "Printing presses"],
    specifications: { "Safety Category": "Cat 4 / PLe", "Contact Configuration": "2NC + 1NO", "Mechanical Life": "5 million operations", "Protection Rating": "IP67", "Locking Force": "2000N (solenoid)", "Operating Voltage": "24V DC / 230V AC" }
  },
  {
    id: "industrial-thermostat",
    name: "Industrial Thermostat",
    shortDescription: "Precision temperature control for industrial heating and cooling systems.",
    description: "Our Industrial Thermostats provide accurate and reliable temperature regulation for a wide range of industrial heating and cooling applications. Built with robust construction, they deliver consistent temperature control in demanding environments.",
    image: industrialThermostat,
    features: ["Wide temperature range", "High accuracy ±1°C", "Adjustable setpoint", "Heavy-duty contacts", "Surface & immersion types", "Quick thermal response"],
    applications: ["Industrial ovens", "Heat treatment furnaces", "HVAC systems", "Water heating systems", "Oil heating", "Process heating"],
    specifications: { "Temperature Range": "-30°C to +300°C", "Accuracy": "±1°C", "Sensor Type": "Capillary / Bimetal", "Contact Rating": "16A @ 250V AC", "Differential": "Adjustable 2-10°C", "Housing": "ABS / Metal" }
  },
  {
    id: "temperature-controller",
    name: "Temperature Controller",
    shortDescription: "PID temperature controllers for precise process temperature management.",
    description: "Our Temperature Controllers offer advanced PID control algorithms for precise temperature regulation in industrial processes. With digital displays, multiple input types, and versatile output options, they ensure optimal temperature management.",
    image: temperatureController,
    features: ["PID auto-tune function", "Multiple input types", "Dual display (SV/PV)", "Alarm outputs", "RS485 communication", "Ramp & soak programming"],
    applications: ["Plastic extrusion", "Injection molding", "Heat treatment", "Food processing", "Packaging machines", "Laboratory equipment"],
    specifications: { "Input Types": "TC (K, J, T, E, S, R), RTD (PT100)", "Control Output": "Relay / SSR / 4-20mA", "Display": "Dual 4-digit LED", "Accuracy": "±0.3% FS", "Power Supply": "85-265V AC", "Panel Cutout": "45x45mm / 48x96mm" }
  },
  {
    id: "industrial-heater",
    name: "Industrial Heater",
    shortDescription: "High-performance heating elements for industrial applications.",
    description: "Our Industrial Heaters are engineered for demanding heating applications across various industries. From tubular heaters to strip heaters and cartridge heaters, we provide solutions for every heating challenge with superior heat transfer and longevity.",
    image: industrialHeater,
    features: ["High watt density", "Corrosion-resistant materials", "Custom configurations", "Uniform heat distribution", "Long operational life", "Multiple termination options"],
    applications: ["Oil & gas heating", "Chemical processing", "Food industry", "Plastic machinery", "Textile industry", "Water heating"],
    specifications: { "Heater Types": "Tubular, cartridge, strip, band", "Wattage Range": "100W to 50kW", "Sheath Material": "SS304 / SS316 / Incoloy", "Max Temperature": "Up to 750°C", "Voltage": "230V / 415V AC", "Custom Lengths": "50mm to 6000mm" }
  },
  {
    id: "control-panel",
    name: "Control Panel",
    shortDescription: "Custom-built electrical control panels for industrial automation.",
    description: "We design and manufacture custom electrical control panels for industrial automation and process control. Our panels are built to the highest standards with quality components, ensuring reliable and safe operation of your industrial systems.",
    image: controlPanel,
    features: ["Custom-engineered designs", "PLC/SCADA integration", "IP55/IP65 enclosures", "UL/CE compliant", "Touch screen HMI option", "Remote monitoring capability"],
    applications: ["Process automation", "Motor control centers", "Power distribution", "HVAC controls", "Water treatment", "Manufacturing lines"],
    specifications: { "Enclosure Rating": "IP55 / IP65", "Sheet Thickness": "2mm CRCA / SS", "Standards": "IEC 61439, IS 8623", "Voltage Rating": "Up to 690V AC", "Bus Bar": "Copper / Aluminum", "Painting": "Powder coated RAL 7035" }
  },
  {
    id: "industrial-sensors",
    name: "Industrial Sensors",
    shortDescription: "Precision sensors for position, proximity, and level detection.",
    description: "Our range of Industrial Sensors covers proximity, photoelectric, ultrasonic, and capacitive sensing technologies. These sensors provide reliable detection and measurement in automated manufacturing and process control environments.",
    image: industrialSensors,
    features: ["Multiple sensing technologies", "High repeat accuracy", "Extended sensing range", "IO-Link compatible", "LED status indicators", "Robust metal housings"],
    applications: ["Automated assembly lines", "Packaging machines", "Material handling", "Liquid level detection", "Object counting", "Position verification"],
    specifications: { "Sensing Types": "Inductive, capacitive, photoelectric", "Sensing Range": "1mm to 15m (type dependent)", "Output Types": "PNP/NPN, 4-20mA, analog", "Supply Voltage": "10-30V DC", "Protection Rating": "IP67 / IP69K", "Response Time": "< 1ms" }
  },
  {
    id: "level-switch",
    name: "Level Switch",
    shortDescription: "Reliable level detection for liquids, solids, and slurries.",
    description: "Our Level Switches provide reliable point-level detection for liquids, powders, and granular solids. Using various sensing technologies including float, vibrating fork, and capacitive methods, they ensure accurate level monitoring in tanks and silos.",
    image: levelSwitch,
    features: ["Multiple sensing technologies", "Intrinsically safe options", "High/low level detection", "Fail-safe operation", "No moving parts (vibrating fork)", "Self-diagnostic capability"],
    applications: ["Water & wastewater treatment", "Chemical storage tanks", "Food & beverage processing", "Pharmaceutical industry", "Oil & gas", "Silo level monitoring"],
    specifications: { "Types": "Float, vibrating fork, capacitive, RF", "Process Temperature": "-40°C to +250°C", "Process Pressure": "Up to 40 bar", "Output": "Relay SPDT / PNP / NAMUR", "Connection": "Threaded / Flanged", "Approvals": "ATEX, IECEx (optional)" }
  },
  {
    id: "rotary-switch",
    name: "Rotary Switch",
    shortDescription: "Multi-position rotary switches for circuit selection and control.",
    description: "Our Rotary Switches offer reliable multi-position switching for industrial control panels and machinery. Available in various configurations, they provide safe and durable circuit selection for motor control, lighting, and instrumentation applications.",
    image: rotarySwitch,
    features: ["Multiple position options", "Panel & base mounting", "Padlockable handle", "IP65 protection", "Arc-resistant housing", "Color-coded markings"],
    applications: ["Motor changeover", "Generator changeover", "Voltmeter selection", "Ammeter selection", "Star-delta starting", "Lighting control"],
    specifications: { "Current Rating": "16A to 125A", "Voltage Rating": "Up to 690V AC", "Positions": "2, 3, 4 position", "Poles": "1P to 4P", "Mounting": "Panel / base / DIN rail", "Protection": "IP65 (with enclosure)" }
  },
  {
    id: "digital-temperature-controller",
    name: "Digital Temperature Controller",
    shortDescription: "Advanced digital controllers with programmable features and communication.",
    description: "Our Digital Temperature Controllers feature advanced microprocessor-based control with programmable profiles, data logging, and communication capabilities. They are ideal for applications requiring precise, repeatable temperature control with process documentation.",
    image: digitalTempController,
    features: ["Programmable ramp/soak profiles", "Data logging function", "Ethernet/Modbus communication", "Multi-zone control option", "Touch-screen models available", "Recipe storage"],
    applications: ["Heat treatment furnaces", "Environmental chambers", "Ceramic kilns", "Glass processing", "Semiconductor manufacturing", "Research laboratories"],
    specifications: { "Input Types": "TC, RTD, mV, mA, V", "Control Modes": "PID, ON/OFF, Manual", "Programs": "Up to 99 segments", "Communication": "RS485 Modbus / Ethernet", "Display": "Color LCD / LED", "Accuracy": "±0.2% FS ±1 digit" }
  },
  {
    id: "conveyor-safety-switch",
    name: "Conveyor Safety Switch",
    shortDescription: "Comprehensive safety switching for conveyor belt protection systems.",
    description: "The Conveyor Safety Switch is a robust emergency stop device specifically designed for conveyor belt installations. It provides immediate emergency stopping capability and is an essential component of any conveyor safety system, meeting international safety standards.",
    image: conveyorSafetySwitch,
    features: ["Emergency stop function", "Maintained contacts", "High visibility red button", "Stainless steel actuator", "Quick disconnect cable", "Status indication LED"],
    applications: ["Coal conveyors", "Aggregate conveyors", "Food processing lines", "Airport baggage handling", "Distribution centers", "Recycling facilities"],
    specifications: { "Contact Configuration": "2NC + 2NO", "Current Rating": "10A @ 240V AC", "Protection Rating": "IP66", "Reset Type": "Manual key reset", "Housing Material": "Glass-filled polyester", "Cable Entry": "M20 / PG13.5" }
  },
  {
    id: "industrial-control-system",
    name: "Industrial Control System",
    shortDescription: "Integrated control systems for complete industrial automation solutions.",
    description: "Our Industrial Control Systems provide comprehensive automation solutions combining PLC programming, SCADA systems, and DCS architecture. We deliver turnkey control system solutions tailored to your specific process requirements.",
    image: industrialControlSystem,
    features: ["PLC-based architecture", "SCADA integration", "Remote access capability", "Redundant controllers", "Historical data trending", "Alarm management system"],
    applications: ["Process industries", "Power generation", "Water treatment plants", "Manufacturing automation", "Building management", "Energy management"],
    specifications: { "PLC Brands": "Siemens, Allen-Bradley, Mitsubishi", "I/O Capacity": "Scalable up to 10,000+ points", "Communication": "Profinet, Ethernet/IP, Modbus", "HMI": "7\" to 22\" touch panels", "Programming": "IEC 61131-3", "Redundancy": "Hot standby CPU option" }
  }
];
