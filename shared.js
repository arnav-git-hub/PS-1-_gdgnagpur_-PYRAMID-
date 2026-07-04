// MediSync Shared Client-Side Database & State Manager

const DEFAULT_DB = {
  activePatientId: "MV-9982",
  activeUser: { role: "doctor", name: "Dr. Sarah Johnson", id: "DSJ-1" },
  patients: {
    "MV-9982": {
      id: "MV-9982",
      name: "Marcus Vane",
      age: 45,
      gender: "Male",
      bloodType: "O Positive",
      weight: "78.2 kg",
      bp: "120/80",
      heartRate: 72,
      bodyTemp: "98.6",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6hndcXxopHICamWHCe_D_fkM7cGp5glW-uYtr3MrlsRFg45S7miUnEEnbrqjHv3Z_TmUcqJ-dTOh_RH_aBqKjPnuXrPeudJs9_LAvmeVeOagUKc2roRXxYOd2swJ8fSpYxYXoT9DZSnAbP3SHImj42EITBGzbu1OB-R6X9FgOGCZpmPsG-ej9Vqub-VqdLnhsjBzeP0hjFgQiIRVwDadYaE39JyWNleqYLlk7zp7hvhrhRb6Tw2rSZQ",
      allergies: ["Penicillin"],
      vitalsHistory: [70, 74, 71, 72, 75, 73, 72],
      prescriptions: [
        { name: "Atorvastatin", dosage: "20mg", frequency: "Once daily (QD)", duration: "30 days", notes: "Take at night.", date: "14 Oct 2023", status: "ACTIVE" },
        { name: "Metformin", dosage: "500mg", frequency: "Twice daily (BID)", duration: "60 days", notes: "Take with meals.", date: "02 Sep 2023", status: "ACTIVE" }
      ],
      timeline: [
        { date: "Oct 24, 2023", time: "10:30 AM", specialty: "Cardiology", title: "ECG Results Analysis", desc: "Standard sinus rhythm observed. Slight ST-segment depression noted during exercise stress test. Recommended follow-up in 3 months for echo monitoring.", doctor: "Dr. Sarah Johnson" },
        { date: "Oct 18, 2023", time: "02:15 PM", specialty: "Physio", title: "Post-Op Mobility Session", desc: "Patient showing 85% range of motion in the right shoulder. Strength exercises increased to 5lb resistance. Patient reports low pain (2/10).", doctor: "Dr. Elena Vance" },
        { date: "Oct 12, 2023", time: "09:00 AM", specialty: "Follow-up Notes", title: "General Health Consultation", desc: "Patient discussed sleep hygiene and diet. Weight down 2.4kg since last consultation. Continue current maintenance dose of Atorvastatin.", doctor: "Dr. Sarah Johnson" }
      ],
      logs: [
        { title: "New Prescription: Metformin 500mg", date: "Yesterday", icon: "prescriptions" },
        { title: "Blood Panel Results Received", date: "Oct 26, 2023", icon: "lab_research" },
        { title: "Patient History Updated - Allergy Profile", date: "Oct 25, 2023", icon: "history" },
        { title: "Automated Vitals Alert: SpO2 Dip (94%)", date: "Oct 24, 2023", icon: "notifications_active" }
      ]
    },
    "SJ-2941-X": {
      id: "SJ-2941-X",
      name: "Sarah Jenkins",
      age: 72,
      gender: "Female",
      bloodType: "A Positive",
      weight: "68.5 kg",
      bp: "128/84",
      heartRate: 68,
      bodyTemp: "98.4",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3GpHIf8UMQbgP_p0wVv9XJUZFdRDJEW_hBTmEoQ29821TrTUQp19Aiu26UDyplyGqqNc1EhRat0Jc1R_F-Hbux2eObDzBjTGa-D1gM6IhaxIcZMm7REqV3QG0jNMKWMuIVMDciNnQaw_11Qh6c_Ull-wCTuMEDDnyiiZymkgchD1KqEpDwSmW127A3AvHfRCKzXMD-a7sPRabR3btgIlU9nz05lYhUU7OXyyCj7D_gZYktJy2NrFeqw",
      allergies: ["Sulfa"],
      vitalsHistory: [65, 68, 67, 69, 66, 68, 68],
      prescriptions: [
        { name: "Lisinopril", dosage: "10mg", frequency: "Once daily (QD)", duration: "90 days", notes: "Monitor BP weekly.", date: "24 Oct 2023", status: "ACTIVE" },
        { name: "Metformin ER", dosage: "500mg", frequency: "Once daily (QD)", duration: "60 days", notes: "Take with evening meal.", date: "23 Oct 2023", status: "ACTIVE" }
      ],
      timeline: [
        { date: "Oct 24, 2023", time: "09:15 AM", specialty: "Cardiology", title: "Echocardiogram", desc: "Routine follow-up post-valve procedure. Ejection fraction remains stable at 58%. No significant valvular regurgitation noted since previous scan in August.", doctor: "Dr. Aris Thorne", file: "Echo_Result_SarahJ.pdf", fileSize: "4.2 MB" },
        { date: "Oct 18, 2023", time: "02:30 PM", specialty: "Endocrinology", title: "Blood Test Result: HbA1c", desc: "A significant increase from the previous baseline of 6.8%. Medication adjustment suggested for Metformin dosage. Result: 7.4%.", doctor: "Lab Central", abnormal: true, value: "7.4%" },
        { date: "Oct 05, 2023", time: "11:00 AM", specialty: "Neurology", title: "Initial Assessment", desc: "Patient reports intermittent numbness in extremities. Baseline cognitive assessment score: 28/30. Scheduling MRI for further investigation of lumbar spine.", doctor: "Dr. Elena Vance" }
      ],
      logs: [
        { title: "New Prescription: Lisinopril 10mg", date: "Yesterday", icon: "prescriptions" },
        { title: "HbA1c Blood Panel Results Uploaded", date: "Oct 18, 2023", icon: "science" },
        { title: "Neurology Initial Assessment Completed", date: "Oct 05, 2023", icon: "psychology" }
      ]
    }
  },
  alerts: [
    { id: 1, type: "error", patientId: "MV-9982", patientName: "Marcus Vane", title: "Critical Conflict", desc: "Drug-to-drug interaction detected for Marcus Vane. Immediate review required for Warfarin and Aspirin prescription.", time: "2m ago" },
    { id: 2, type: "info", patientId: "SJ-2941-X", patientName: "Sarah Jenkins", title: "Clinical Update", desc: "New lab results uploaded for Sarah Jenkins. Biochemistry panel is ready for verification.", time: "45m ago" },
    { id: 3, type: "warning", patientId: "MV-9982", patientName: "Marcus Vane", title: "Upcoming Reminder", desc: "Telemedicine session with Marcus Vane starting in 15 minutes. Ensure connectivity.", time: "2h ago" }
  ]
};

// Drug-Drug Conflict Database (Simple pairs for mock-checking)
const DRUG_CONFLICTS = [
  { med1: "Warfarin", med2: "Aspirin", severity: "error", msg: "Critical drug interaction. Concomitant use increases risk of serious gastrointestinal or internal bleeding. Clinical override required." },
  { med1: "Aspirin", med2: "Warfarin", severity: "error", msg: "Critical drug interaction. Concomitant use increases risk of serious gastrointestinal or internal bleeding. Clinical override required." },
  { med1: "Metformin", med2: "Atorvastatin", severity: "warning", msg: "Moderate interaction. Potential risk of increased blood lactate levels / myopathy. Clinical observation recommended." },
  { med1: "Atorvastatin", med2: "Metformin", severity: "warning", msg: "Moderate interaction. Potential risk of increased blood lactate levels / myopathy. Clinical observation recommended." },
  { med1: "Lisinopril", med2: "Metformin", severity: "warning", msg: "Moderate interaction. Co-administration may increase risk of lactic acidosis or hypoglycemia. Monitor kidney function." },
  { med1: "Metformin", med2: "Lisinopril", severity: "warning", msg: "Moderate interaction. Co-administration may increase risk of lactic acidosis or hypoglycemia. Monitor kidney function." },
  { med1: "Lisinopril", med2: "Metformin ER", severity: "warning", msg: "Moderate interaction. Co-administration may increase risk of lactic acidosis or hypoglycemia. Monitor kidney function." },
  { med1: "Metformin ER", med2: "Lisinopril", severity: "warning", msg: "Moderate interaction. Co-administration may increase risk of lactic acidosis or hypoglycemia. Monitor kidney function." }
];

// Initialize database
function initDB() {
  if (!localStorage.getItem("medisync_db")) {
    localStorage.setItem("medisync_db", JSON.stringify(DEFAULT_DB));
  }
}

// Retrieve DB object
function getDB() {
  initDB();
  return JSON.parse(localStorage.getItem("medisync_db"));
}

// Save DB object
function saveDB(db) {
  localStorage.setItem("medisync_db", JSON.stringify(db));
}

// Active user session handling
function getActiveUser() {
  const db = getDB();
  return db.activeUser;
}

function setActiveUser(role, id, name) {
  const db = getDB();
  db.activeUser = { role, id, name };
  saveDB(db);
}

// Active patient context
function getActivePatientId() {
  const db = getDB();
  return db.activePatientId;
}

function setActivePatientId(id) {
  const db = getDB();
  db.activePatientId = id;
  saveDB(db);
}

function getPatient(id) {
  const db = getDB();
  return db.patients[id] || db.patients["MV-9982"];
}

// Check if a medication name conflicts with any active prescriptions of a patient
function checkConflict(patientId, newMedName) {
  const patient = getPatient(patientId);
  const newName = newMedName.trim().toLowerCase();

  // 1. Check patient-specific allergies
  if (patient.allergies) {
    for (const allergy of patient.allergies) {
      if (allergy.toLowerCase() === "penicillin") {
        const penicillinTriggers = ["amoxicillin", "penicillin", "ampicillin", "augmentin", "piperacillin"];
        if (penicillinTriggers.some(trigger => newName.includes(trigger))) {
          return {
            conflict: true,
            severity: "error",
            isAllergy: true,
            msg: "CRITICAL ALLERGY: Patient is allergic to the Penicillin group. Prescribing this medication may trigger severe anaphylactic reactions.",
            med: "Penicillin"
          };
        }
      }
      if (allergy.toLowerCase() === "sulfa") {
        const sulfaTriggers = ["sulfa", "sulfamethoxazole", "bactrim", "septra"];
        if (sulfaTriggers.some(trigger => newName.includes(trigger))) {
          return {
            conflict: true,
            severity: "error",
            isAllergy: true,
            msg: "CRITICAL ALLERGY: Patient is allergic to Sulfa-based drugs. Prescribing this medication may trigger severe allergic reactions.",
            med: "Sulfa"
          };
        }
      }
    }
  }

  // 2. Check drug-drug interactions
  for (const pres of patient.prescriptions) {
    if (pres.status !== "ACTIVE") continue;
    const existingName = pres.name.trim().toLowerCase();

    // Check conflict rules
    for (const rule of DRUG_CONFLICTS) {
      if (
        (rule.med1.toLowerCase() === newName && rule.med2.toLowerCase() === existingName) ||
        (rule.med2.toLowerCase() === newName && rule.med1.toLowerCase() === existingName)
      ) {
        return {
          conflict: true,
          severity: rule.severity,
          msg: rule.msg,
          med: pres.name
        };
      }
    }
  }
  return { conflict: false };
}

// Save prescription
function addPrescription(patientId, medicine, dosage, frequency, duration, notes) {
  const db = getDB();
  const patient = db.patients[patientId];
  if (!patient) return false;

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", { day: '2-digit', month: 'short', year: 'numeric' });
  const formattedTime = today.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });

  // 1. Add prescription
  const newPres = {
    name: medicine,
    dosage: dosage,
    frequency: frequency,
    duration: duration,
    notes: notes,
    date: formattedDate,
    status: "ACTIVE"
  };
  patient.prescriptions.unshift(newPres);

  // 2. Log clinical activity
  patient.logs.unshift({
    title: `New Prescription: ${medicine} ${dosage}`,
    date: "Just now",
    icon: "prescriptions"
  });

  // 3. Add to detailed timeline
  patient.timeline.unshift({
    date: formattedDate,
    time: formattedTime,
    specialty: "Prescription",
    title: `${medicine} Prescribed`,
    desc: `New prescription of ${medicine} ${dosage} (${frequency}) issued for ${duration}. Instructions: ${notes || "None."}`,
    doctor: db.activeUser.name || "Dr. Sarah Johnson"
  });

  // 4. Check for conflicts
  const conflictResult = checkConflict(patientId, medicine);
  if (conflictResult.conflict) {
    // Add warning/error alert to global system notifications
    const newAlert = {
      id: Date.now(),
      type: conflictResult.severity, // 'error' or 'warning'
      patientId: patientId,
      patientName: patient.name,
      title: conflictResult.severity === "error" ? "Critical Conflict" : "Medication Warning",
      desc: `Interaction detected for ${patient.name}. ${medicine} conflicts with active prescription of ${conflictResult.med}. ${conflictResult.msg}`,
      time: "Just now"
    };
    db.alerts.unshift(newAlert);
  }

  db.patients[patientId] = patient;
  saveDB(db);
  return true;
}

// Save custom clinical record/note from detailed timeline
function addClinicalNote(patientId, specialty, title, desc) {
  const db = getDB();
  const patient = db.patients[patientId];
  if (!patient) return false;

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", { day: '2-digit', month: 'short', year: 'numeric' });
  const formattedTime = today.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });

  // Add timeline entry
  patient.timeline.unshift({
    date: formattedDate,
    time: formattedTime,
    specialty: specialty,
    title: title,
    desc: desc,
    doctor: db.activeUser.name || "Dr. Sarah Johnson"
  });

  // Add clinical activity log
  patient.logs.unshift({
    title: `${specialty} record added: ${title}`,
    date: "Just now",
    icon: "lab_research"
  });

  db.patients[patientId] = patient;
  saveDB(db);
  return true;
}

// Remove single notification/alert
function dismissAlert(alertId) {
  const db = getDB();
  db.alerts = db.alerts.filter(alert => alert.id !== Number(alertId));
  saveDB(db);
}

// Clear all alerts
function clearAllAlerts() {
  const db = getDB();
  db.alerts = [];
  saveDB(db);
}

// Initialize on script load
initDB();
