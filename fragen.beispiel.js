// Diese Datei enthält nur die Fragen. Zum Austauschen einfach ersetzen.
// "richtig" ist die Nummer der richtigen Antwort, gezählt ab 0
// (0 = erste Antwort, 1 = zweite Antwort, ...).

const QUIZ = {
  titel: "Beispiel-Quiz",
  bestehensgrenzeProzent: 80,   // Mindestanteil richtiger Antworten
  zufaelligeReihenfolge: true,  // Fragen mischen (false = feste Reihenfolge)

  fragen: [
    {
      frage: "Wie viele Tage hat ein Jahr (kein Schaltjahr)?",
      antworten: ["364", "365", "366", "360"],
      richtig: 1
    },
    {
      frage: "Welche Farbe entsteht beim Mischen von Blau und Gelb?",
      antworten: ["Grün", "Orange", "Violett", "Braun"],
      richtig: 0
    },
    {
      frage: "Was ist die Hauptstadt von Deutschland?",
      antworten: ["München", "Hamburg", "Berlin", "Köln"],
      richtig: 2
    },
    {
      frage: "Wie viel ist 12 × 12?",
      antworten: ["124", "132", "144", "154"],
      richtig: 2
    },
    {
      frage: "Welche Einheit hat die elektrische Spannung?",
      antworten: ["Ampere", "Volt", "Ohm", "Watt"],
      richtig: 1
    }
  ]
};
