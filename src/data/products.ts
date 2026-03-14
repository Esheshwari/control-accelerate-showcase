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
import hydraulicHose from "@/assets/products/hydraulic-hose.jpg";
import industrialCarbonBrush from "@/assets/products/industrial carbon brush.jpg";
import industrialDrumHeater from "@/assets/products/Industrial drum heater.jpg";
import industrialHooter from "@/assets/products/industrial-hooter.jpg";
import joystickController from "@/assets/products/joystick controller.jpg";
import loadCell from "@/assets/products/load-cell.jpg";
import motionSensor from "@/assets/products/motion-sensor.jpg";
import plugSocket from "@/assets/products/plug & socket.jpg";
import pullCordRope from "@/assets/products/pull cord rope.jpg";
import pullCordSwitchLamp from "@/assets/products/Pull Cord Switch with Lamp indication.jpg";
import pullCordSwitch from "@/assets/products/Pull cord switch.jpg";
import resistanceBox from "@/assets/products/resistance box.jpg";
import smokeSensor from "@/assets/products/smoke-sensor.jpg";
import waveSling from "@/assets/products/wave sling.jpg";
import weldingDistributionBox from "@/assets/products/welding-distribution-box.jpg";
import winchMachine from "@/assets/products/winch machine.jpg";
import zeroSpeedSwitch from "@/assets/products/zero-speed-switch.jpg";

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
    id: "antiCollisionDevice",
    name: "Anti-Collision Device",
    shortDescription: "Collision avoidance for overhead cranes and trolleys.",
    description: "The Anti-Collision Device detects obstacles and prevents unintended contact between moving crane components. It helps protect personnel and equipment by issuing early warnings and initiating controlled slow-downs.",
    image: antiCollisionDevice,
    features: ["Adjustable detection range", "Audible and visual alarms", "Robust IP65 housing", "Easy integration with crane controls", "Low power consumption"],
    applications: ["Overhead cranes", "Gantry cranes", "Port terminals", "Heavy fabrication shops", "Steel mills"],
    specifications: { "Detection Range": "0.5 - 20m", "Power Supply": "24V DC", "Outputs": "Relay / 4-20mA", "Protection Rating": "IP65", "Operating Temperature": "-20°C to +60°C" }
  },
  {
    id: "beltSwaySwitch",
    name: "Belt Sway Switch",
    shortDescription: "Monitors belt alignment and prevents damage from belt misalignment.",
    description: "The Belt Sway Switch monitors conveyor belt alignment and triggers an alarm or shutdown when the belt drifts beyond acceptable limits. This prevents belt damage, material spillage, and structural harm to the conveyor system.",
    image: beltSwaySwitch,
    features: ["Dual-stage alarm system", "Adjustable activation angle", "Heavy-duty roller arm", "Weather-resistant enclosure", "LED status indication", "Self-aligning mounting bracket"],
    applications: ["Mining operations", "Thermal power plants", "Cement industry", "Steel plants", "Fertilizer plants", "Aggregate processing"],
    specifications: { "Housing Material": "Die-cast Aluminum", "Protection Rating": "IP65", "Activation Angle": "10° to 35°", "Contact Rating": "10A @ 240V AC", "Operating Temperature": "-25°C to +70°C", "Mounting": "Universal bracket" }
  },
  {
    id: "chainBlockHoist",
    name: "Chain Block Hoist",
    shortDescription: "Manual hoist for lifting and lowering loads with precision.",
    description: "The Chain Block Hoist offers a compact and durable lifting solution for workshops, maintenance bays, and construction sites. Its smooth gearing and high-strength chain deliver reliable operation even under heavy use.",
    image: chainBlockHoist,
    features: ["High-strength alloy chain", "Multiple load capacities", "Smooth gearbox operation", "Compact design", "Integrated load limiter"],
    applications: ["Workshop lifting", "Construction sites", "Maintenance bays", "Warehousing", "Rigging operations"],
    specifications: { "Capacity": "0.5t to 10t", "Lift Height": "1.5m (standard)", "Chain Material": "Alloy steel", "Safety Factor": "4:1", "Brake Type": "Automatic" }
  },
  {
    id: "currentCollector",
    name: "Current Collector",
    shortDescription: "Reliable current collection for electrified cranes and trolleys.",
    description: "Our Current Collectors ensure stable power transfer from conductor bars to moving equipment. Designed for demanding industrial environments, they maintain consistent contact and minimize wear.",
    image: currentCollector,
    features: ["Low-friction contact shoes", "Modular mounting", "Replaceable contact inserts", "High conductivity materials", "Durable weatherproof housing"],
    applications: ["Overhead cranes", "Gantry systems", "Automated guided vehicles", "Material handling systems"],
    specifications: { "Voltage Rating": "380V / 690V AC", "Current Rating": "100A to 500A", "Protection Rating": "IP44", "Contact Material": "Copper alloy", "Operating Temperature": "-20°C to +60°C" }
  },
  {
    id: "dischargeRod",
    name: "Discharge Rod",
    shortDescription: "Grounding rod for safe discharge of static electricity.",
    description: "The Discharge Rod provides a safe path to ground for static and stray electrical charges. It is used in material handling and industrial systems to protect equipment and personnel.",
    image: dischargeRod,
    features: ["High-conductivity tip", "Robust insulating handle", "Quick-mount bracket", "Corrosion-resistant finish"],
    applications: ["Bulk material handling", "Dust collection systems", "Electrostatic discharge protection", "Conveyor platforms"],
    specifications: { "Length": "1.2m", "Material": "Stainless steel", "Mounting": "Clamp / flange", "Operating Temperature": "-40°C to +80°C", "Protection Rating": "IP54" }
  },
  {
    id: "dslBusbar",
    name: "DSL Busbar",
    shortDescription: "Durable busbar system for crane power distribution.",
    description: "The DSL Busbar provides a robust and low-maintenance power distribution solution for cranes and gantries. Its modular design allows easy extension and reliable operation in heavy-duty environments.",
    image: dslBusbar,
    features: ["Modular construction", "Low resistance conductors", "IP55 protection", "Easy installation", "High current capacity"],
    applications: ["Overhead cranes", "Gantry cranes", "Port terminals", "Steel mills", "Heavy fabrication"],
    specifications: { "Current Rating": "200A to 1200A", "Voltage Rating": "400V / 690V", "Protection Rating": "IP55", "Conductor Material": "Copper / Aluminum", "Operating Temperature": "-25°C to +60°C" }
  },
  {
    id: "earthCurrentCollector",
    name: "Earth Current Collector",
    shortDescription: "Grounding device for safe current collection on mobile equipment.",
    description: "The Earth Current Collector ensures stable grounding for moving cranes and trolleys, reducing the risk of electrical faults and ensuring operator safety.",
    image: earthCurrentCollector,
    features: ["Replaceable contact pads", "Robust mounting bracket", "Low wear design", "Corrosion-resistant finish"],
    applications: ["Crane grounding", "Rail-mounted equipment", "Heavy lifting systems"],
    specifications: { "Contact Material": "Copper alloy", "Current Rating": "50A to 200A", "Protection Rating": "IP44", "Operating Temperature": "-20°C to +60°C", "Mounting": "Bolt-on" }
  },
  {
    id: "Electric-hydraulic thruster",
    name: "Electric Hydraulic Thruster",
    shortDescription: "Compact hydraulic actuator for precision positioning.",
    description: "The Electric Hydraulic Thruster combines electrical actuation with hydraulic power for smooth and precise motion control. It is ideal for applications requiring high force in a compact form.",
    image: electricHydraulicThruster,
    features: ["High force output", "Compact footprint", "Smooth motion control", "Adjustable stroke", "Integrated limit switches"],
    applications: ["Valve actuation", "Material handling", "Industrial automation", "Packaging machinery"],
    specifications: { "Force": "500N to 3000N", "Stroke": "10mm to 100mm", "Supply Voltage": "24V DC / 110V AC", "Protection Rating": "IP65", "Operating Temperature": "-10°C to +60°C" }
  },
  {
    id: "electromagneticFlowMeter",
    name: "Electromagnetic Flow Meter",
    shortDescription: "Accurate flow measurement for conductive liquids.",
    description: "The Electromagnetic Flow Meter provides reliable, maintenance-free flow measurement for conductive fluids. Its non-intrusive sensing and wide rangeability make it ideal for water treatment and process control.",
    image: electromagneticFlowMeter,
    features: ["No moving parts", "Wide flow range", "Bi-directional measurement", "Digital output", "High accuracy"],
    applications: ["Water treatment", "Chemical dosing", "Pulp & paper", "Food & beverage"],
    specifications: { "Accuracy": "±0.5% of reading", "Line Size": "DN10 to DN200", "Output": "4-20mA / Pulse / Modbus", "Power Supply": "24V DC / 110V AC", "Protection Rating": "IP67" }
  },
  {
    id: "eotCrane",
    name: "EOT Crane",
    shortDescription: "Heavy-duty electric overhead travelling crane systems.",
    description: "Our EOT Cranes are engineered for heavy lifting and high uptime in demanding environments. They offer smooth motion, precise positioning, and robust safety features.",
    image: eotCrane,
    features: ["Custom lifting capacities", "Variable frequency drive control", "Anti-sway systems", "Safety limit switches", "Durable structural design"],
    applications: ["Steel mills", "Shipyards", "Foundries", "Machine shops", "Logistics centers"],
    specifications: { "Capacity": "1t to 100t+", "Span": "Up to 30m+", "Travel Speed": "0.5 to 60 m/min", "Hoist Speed": "0.5 to 30 m/min", "Power Supply": "415V 3-phase" }
  },
  {
    id: "heatResistantFireSleeve",
    name: "Heat Resistant Fire Sleeve",
    shortDescription: "Fireproof sleeve for protecting hoses and cables.",
    description: "The Heat Resistant Fire Sleeve shields hydraulic hoses, cables, and wiring from extreme temperatures, sparks, and molten splatter. It is ideal for foundries, welding areas, and high-temperature environments.",
    image: heatResistantFireSleeve,
    features: ["High temperature resistance", "Flexible construction", "Easy installation", "Abrasion resistance", "UV stable"],
    applications: ["Foundries", "Welding stations", "Steel mills", "Glass manufacturing"],
    specifications: { "Temperature Rating": "-60°C to +1100°C", "Material": "Silicone-coated fiberglass", "Outer Diameter": "10mm to 150mm", "Length": "Custom lengths available", "Color": "Black" }
  },
  {
    id: "hydraulicFitting",
    name: "Hydraulic Fitting",
    shortDescription: "High-pressure fittings for hydraulic hose assemblies.",
    description: "Our Hydraulic Fittings provide leak-free connections for high-pressure hydraulic systems. They are available in multiple thread standards and materials to suit a wide variety of applications.",
    image: hydraulicFitting,
    features: ["High pressure rating", "Wide thread compatibility", "Corrosion-resistant plating", "Swaged and flared types", "Easy installation"],
    applications: ["Mobile hydraulics", "Industrial machinery", "Agricultural equipment", "Marine hydraulics"],
    specifications: { "Pressure Rating": "Up to 6000 PSI", "Material": "Carbon steel / Stainless steel", "Thread Types": "BSP, NPT, JIC", "Temperature Range": "-40°C to +120°C", "Seal Type": "O-ring / Metal-to-metal" }
  },
  {
    id: "hydraulicHose",
    name: "Hydraulic Hose",
    shortDescription: "Reinforced hose for high-pressure hydraulic systems.",
    description: "Our Hydraulic Hoses are designed for reliability in demanding hydraulic applications. With multiple reinforcement layers and abrasion-resistant cover, they deliver long service life and safety.",
    image: hydraulicHose,
    features: ["High burst strength", "Abrasion resistant cover", "Flexible construction", "Wide temperature range", "Compatible with multiple fluids"],
    applications: ["Construction equipment", "Agricultural machinery", "Industrial hydraulics", "Mining equipment"],
    specifications: { "Pressure Rating": "5000 PSI / 7000 PSI", "Tube Material": "Synthetic rubber", "Cover Material": "EPDM / Neoprene", "Temperature Range": "-40°C to +120°C", "Reinforcement": "Steel wire braided" }
  },
  {
    id: "industrialCarbonBrush",
    name: "Industrial Carbon Brush",
    shortDescription: "Replacement carbon brushes for motors and generators.",
    description: "Our Industrial Carbon Brushes offer consistent conductivity and long life in demanding motor and generator applications. They are engineered for minimal wear and reliable performance.",
    image: industrialCarbonBrush,
    features: ["High conductivity", "Low wear characteristics", "Precision machining", "Wide compatibility", "Easy replacement"],
    applications: ["Electric motors", "Generators", "Wind turbines", "Rail traction motors"],
    specifications: { "Material": "Graphite / Carbon composite", "Operating Temperature": "-20°C to +120°C", "Current Density": "8 A/cm²", "Brush Size": "Custom sizes available", "Spring Type": "Helical / Flat" }
  },
  {
    id: "industrialDrumHeater",
    name: "Industrial Drum Heater",
    shortDescription: "Portable heater for temperature control of drums and barrels.",
    description: "The Industrial Drum Heater maintains consistent temperatures for viscous fluids and chemicals stored in drums. Its durable construction and easy fastening make it ideal for process heating and material handling.",
    image: industrialDrumHeater,
    features: ["Even heat distribution", "Adjustable thermostat", "Soft insulation", "Quick-wrap design", "Safety cut-off"],
    applications: ["Chemical processing", "Paints & coatings", "Food industry", "Lubricants & oils"],
    specifications: { "Power Rating": "500W to 2000W", "Temperature Range": "50°C to 150°C", "Voltage": "220V / 110V AC", "Material": "Silicone rubber", "Protection": "IP54" }
  },
  {
    id: "industrialHooter",
    name: "Industrial Hooter",
    shortDescription: "High-decibel audible alarm for industrial safety notifications.",
    description: "The Industrial Hooter provides a loud, clear alarm signal for emergencies and process alerts in noisy industrial environments. Its rugged design ensures reliable operation even in harsh conditions.",
    image: industrialHooter,
    features: ["High sound output", "Weatherproof housing", "Multi-tone capability", "Easy mounting", "Low power consumption"],
    applications: ["Factory floor alerts", "Emergency evacuation", "Process alarms", "Vehicle reversing"],
    specifications: { "Sound Level": "110 dB at 1m", "Voltage": "24V DC / 110V AC / 230V AC", "Protection Rating": "IP65", "Operating Temperature": "-20°C to +60°C", "Tone Options": "Single / Multi-tone" }
  },
  {
    id: "joystickController",
    name: "Joystick Controller",
    shortDescription: "Ergonomic joystick for precision motion control.",
    description: "The Joystick Controller offers smooth and accurate control for cranes, hoists, and material handling equipment. Its robust construction withstands harsh environments while delivering responsive operation.",
    image: joystickController,
    features: ["Ergonomic grip", "Proportional control", "Multiple axes support", "Dust & water resistant", "Modular mounting"],
    applications: ["Cranes & hoists", "Material handling equipment", "Remote control stations", "Robotics"],
    specifications: { "Control Axes": "1 to 4", "Output": "0-10V / 4-20mA / CAN", "Protection Rating": "IP65", "Operating Temperature": "-20°C to +60°C", "Supply Voltage": "12-24V DC" }
  },
  {
    id: "loadCell",
    name: "Load Cell",
    shortDescription: "Precision load measurement for weighing and force sensing.",
    description: "Our Load Cells deliver high-accuracy weight and force measurement in industrial weighing systems. They are designed for long-term stability and rugged use.",
    image: loadCell,
    features: ["High accuracy", "Low profile design", "IP67 protection", "Stainless steel construction", "Easy calibration"],
    applications: ["Weighbridges", "Tank weighing", "Material batching", "Force monitoring"],
    specifications: { "Capacity": "5kg to 50t", "Accuracy": "0.03% FS", "Output": "mV/V", "Excitation": "5-15V DC", "Protection Rating": "IP67" }
  },
  {
    id: "motionSensor",
    name: "Motion Sensor",
    shortDescription: "Reliable motion detection for safety and automation.",
    description: "The Motion Sensor detects movement and triggers alarms or automation sequences. It is suitable for security, lighting control, and safety applications.",
    image: motionSensor,
    features: ["Wide detection range", "Selectable sensitivity", "Day/night operation", "IP65 housing", "Low power consumption"],
    applications: ["Security systems", "Automatic lighting", "Machine guarding", "Access control"],
    specifications: { "Detection Range": "10m to 20m", "Detection Angle": "120°", "Power Supply": "12-24V DC", "Output": "Relay / NPN / PNP", "Protection Rating": "IP65" }
  },
  {
    id: "plugSocket",
    name: "Plug Socket",
    shortDescription: "Industrial-grade plug and socket connectors for power distribution.",
    description: "Our Plug Sockets provide safe and secure power connections in industrial environments. Built to withstand heavy use, they are suitable for mobile equipment and fixed installations.",
    image: plugSocket,
    features: ["IP67 protection", "Rugged construction", "Locking mechanism", "Multiple voltages available", "Easy installation"],
    applications: ["Mobile machinery", "Temporary power", "Industrial equipment", "Outdoor installations"],
    specifications: { "Voltage Rating": "230V / 400V", "Current Rating": "16A to 63A", "Protection Rating": "IP67", "Pin Configuration": "3P+E / 5P+E", "Material": "Polyamide" }
  },
  {
    id: "pullCordRope",
    name: "Pull Cord Rope",
    shortDescription: "Durable pull cord assembly for emergency stop systems.",
    description: "The Pull Cord Rope is designed for use with emergency stop pull cord switches, providing a reliable mechanical link to activate safety devices across conveyor systems.",
    image: pullCordRope,
    features: ["High tensile strength", "Weather-resistant coating", "UV stabilized", "Easy tension adjustment", "Long service life"],
    applications: ["Conveyor safety systems", "Material handling lines", "Mining operations", "Bulk handling"],
    specifications: { "Material": "Polyester braided", "Diameter": "6mm to 10mm", "Length": "Up to 200m", "Tensile Strength": ">2000N", "Operating Temperature": "-40°C to +80°C" }
  },
  {
    id: "pullCordSwitchLamp",
    name: "Pull Cord Switch Lamp",
    shortDescription: "Indicator lamp for pull cord switch status monitoring.",
    description: "The Pull Cord Switch Lamp provides visual status indication for pull cord switch systems, making it easy to identify triggered conditions from a distance.",
    image: pullCordSwitchLamp,
    features: ["LED status indication", "Universal mounting", "High visibility", "Low power consumption"],
    applications: ["Conveyor safety systems", "Industrial controls", "Process monitoring"],
    specifications: { "Voltage": "24V DC / 110V AC", "Color": "Red / Green / Yellow", "Protection Rating": "IP65", "Power": "<5W", "Mounting": "Panel / DIN rail" }
  },
  {
    id: "pullCordSwitch",
    name: "Pull Cord Switch",
    shortDescription: "Emergency stop pull cord switch for conveyor belt safety systems.",
    description: "The Pull Cord Switch is a critical safety device designed for emergency stopping of conveyor belts. It allows operators to halt conveyor operations from any point along the belt by pulling the attached cord. Built with heavy-duty construction, it ensures reliable performance in harsh industrial environments.",
    image: pullCordSwitch,
    features: ["Heavy-duty die-cast aluminum housing", "IP65 weather protection", "Manual reset mechanism", "Visual indicator for trip status", "Adjustable cord tension", "Easy installation and maintenance"],
    applications: ["Mining conveyor systems", "Cement plants", "Steel manufacturing", "Power plants", "Port & terminal operations", "Bulk material handling"],
    specifications: { "Housing Material": "Die-cast Aluminum", "Protection Rating": "IP65", "Operating Voltage": "240V AC / 24V DC", "Contact Rating": "10A @ 240V AC", "Operating Temperature": "-25°C to +70°C", "Cable Length": "Up to 100m" }
  },
  {
    id: "resistanceBox",
    name: "Resistance Box",
    shortDescription: "Adjustable resistance module for testing and calibration.",
    description: "The Resistance Box provides a stable and adjustable load for testing instruments, sensors, and control circuits. It is ideal for calibration labs and electrical maintenance.",
    image: resistanceBox,
    features: ["Stepped resistance values", "Robust enclosure", "Easy readout", "Low temperature coefficient"],
    applications: ["Calibration labs", "Test benches", "Electrical workshops", "Instrumentation"],
    specifications: { "Resistance Range": "0 – 10kΩ", "Tolerance": "±1%", "Power Rating": "5W", "Connections": "Banana / Terminal", "Operating Temperature": "-10°C to +60°C" }
  },
  {
    id: "smokeSensor",
    name: "Smoke Sensor",
    shortDescription: "Smoke detection for fire safety and early warning.",
    description: "The Smoke Sensor detects smoke particles and provides early warning for fire safety systems. It is suitable for industrial and commercial installations.",
    image: smokeSensor,
    features: ["Photoelectric sensing", "Low false alarm", "LED status indicator", "Easy mounting"],
    applications: ["Warehouses", "Factories", "Offices", "Storage facilities"],
    specifications: { "Power Supply": "24V DC", "Detection Type": "Photoelectric", "Alarm Output": "Relay", "Protection Rating": "IP42", "Operating Temperature": "-10°C to +50°C" }
  },
  {
    id: "waveSling",
    name: "Wave Sling",
    shortDescription: "Flexible lifting sling for safe load handling.",
    description: "The Wave Sling is a soft lifting sling designed to protect loads while providing high tensile strength. It is ideal for lifting delicate or irregularly shaped items.",
    image: waveSling,
    features: ["High strength synthetic fibers", "Abrasion-resistant cover", "Wide bearing surface", "Lightweight and flexible"],
    applications: ["Machinery lifting", "Shipping & logistics", "Construction", "Rigging"],
    specifications: { "Capacity": "1t to 20t", "Material": "Polyester", "Web Width": "50mm to 200mm", "Safety Factor": "7:1", "Temperature Range": "-40°C to +100°C" }
  },
  {
    id: "weldingDistributionBox",
    name: "Welding Distribution Box",
    shortDescription: "Power distribution for welding equipment and multiple stations.",
    description: "The Welding Distribution Box allows multiple welding machines to share a single power source safely. It includes overcurrent protection and robust connectors for industrial use.",
    image: weldingDistributionBox,
    features: ["Multiple welding outlets", "Overcurrent protection", "Heavy-duty connectors", "Portable design"],
    applications: ["Welding workshops", "Fabrication shops", "Maintenance yards"],
    specifications: { "Input Voltage": "415V 3-phase", "Output": "6 x 63A outlets", "Protection": "MCB / RCCB", "Enclosure": "IP54", "Dimensions": "400x300x200mm" }
  },
  {
    id: "winchMachine",
    name: "Winch Machine",
    shortDescription: "Motorized winch for controlled lifting and pulling.",
    description: "The Winch Machine provides reliable pulling power for lifting, towing, and material handling applications. It features durable gearing and a smooth braking system.",
    image: winchMachine,
    features: ["High torque motor", "Automatic brake", "Multiple drum speeds", "Remote control option"],
    applications: ["Construction", "Mining", "Logging", "Marine"],
    specifications: { "Line Pull": "1t to 20t", "Line Speed": "0.5 to 10 m/min", "Motor": "3HP to 20HP", "Power Supply": "415V 3-phase", "Protection": "IP54" }
  },
  {
    id: "zeroSpeedSwitch",
    name: "Zero Speed Switch",
    shortDescription: "Detects underspeed conditions in rotating equipment and conveyors.",
    description: "The Zero Speed Switch is an electronic speed monitoring device that detects underspeed or zero-speed conditions in rotating machinery. It provides early warning of belt slippage, motor failure, or mechanical blockages, helping prevent costly equipment damage.",
    image: zeroSpeedSwitch,
    features: ["Adjustable speed threshold", "Pulse sensing technology", "Time delay adjustment", "LED speed indication", "Relay output", "Compact design"],
    applications: ["Conveyor belt monitoring", "Bucket elevators", "Rotary kilns", "Crushers & screens", "Fan & blower systems", "Screw conveyors"],
    specifications: { "Sensing Method": "Magnetic proximity", "Speed Range": "0.5 to 3000 RPM", "Time Delay": "1 to 30 seconds", "Supply Voltage": "24V DC / 230V AC", "Output": "DPDT Relay", "Protection Rating": "IP65" }
  }
];
