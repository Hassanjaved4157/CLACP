const fs = require('fs');

// Your JavaScript object
const lawsData = [
    {
      "key": "1",
      "section": "324-C",
      "lawName": "Attempt To Murder",
      "description": "When the injuries are simple and nothing intervened to prevent the offender from committing the murder, the offence falls under section 324, PPC (DB) 1975 P.Cr.LJ 1210 Ramzan.\nAttempt to kill. Although an act may be sufficient to cause death but it would not constitute an offence u/S.307 PPC if necessary intention or knowledge is not established. An attempt per se would not bring case u/S.307 PPC which should stem from specific intention to commit murder. Held, intention to kill cannot be inferred from the mere fact that the pistol shots were fired by the appellant. Appellants acquitted. PLJ 1993 Cr.C. (Kar.) 196, Qayyum Khan.\nInjury and its site are not necessary ingredients of offence under section 307, P.P.C. Attack with open knives but blows landing on non-vital parts. No ground for quashing charge under section 307, P.P.C. PLD 1963 Lah. 442 Muhammad Nazir.\nSimple injuries with dangerous weapons. Contention that the offence fell under section 324, and not under section 307, PPC Held, the use of dangerous weapons coupled with evidence regarding motive made it clear. In the circumstances, had the victim received fatal injuries accused would have been guilty of murder. Conviction under section 307, PPC held proper. (FC) 1969 P.Cr.LJ 1544 Roshan Akhtar etc. v. Crown."
    },
    {
      "key": "2",
      "section": "4/4/79",
      "lawName": "The Prohibition Order",
      "description": "Similarly when the offense is stated to be 4/4/79, it means that the accused has been charged with an offence under Article 4 of order 4 of 1979; Commonly known as The Prohibition Order. The Ordinance governs the Manufacturing, possession, transportation and sale etc of the drugs and intoxicants. The relevant section is reproduced hereunder.\n\nOwing or Possessing Intoxicant Whoever owns, possesses or keeps in his custody any intoxicant shall be punished with imprisonment of either description for a term, which may extend to two years, or with whipping not exceeding thirty stripes, and shall also be liable to fine. Provided that nothing contained in this Article shall apply to a non-Muslim foreigner or to a non-Muslim citizen of Pakistan who keeps in his custody at or about time of ceremony prescribed by his religion a reasonable quantity of intoxicating liquor for the purpose of using it as a part of such ceremony.\n\nProvided further that, if intoxicant in respect of which the offence is committed is heroin, raw opium or coca leaf, and the quantity exceeds ten grams in the case of heroin leaf, the offender shall be punishable with imprisonment for life or with imprisonment which is not less than two years and with whipping not exceeding thirty stripes."
    },
    {
      "key": "3",
      "section": "302",
      "lawName": "Murder",
      "description": "Killing someone regardless of any motive is a big crime. In Pakistan punishment of murder comes under section 302 of Pakistan Penal code. Penal Code governs the punishment of murder which is also known as Qatl-i-amd in three categories.Punished with death as Qisas. Qisas is an Islamic term that means equal retaliation which allows the country to take the life of murderer.Punished with death or imprisonment for life is known as Tazir. Having regard to the facts and circumstances of the case, if the proof in either of the forms specified in section 304 is not available.Punished with imprisonment of either description for a term which may extend to twenty-five years, where according to the injections of Islam the punishment of Qisas is not applicable."
    },
    {
      "key": "4",
      "section": "392",
      "lawName": "Robbery",
      "description": "Robbery is also a serious crime, although in our country the burglar never gets detained but if he meets the legal procedure then according to PPC the person who commits robbery should be punished with not less than 3 years imprisonment that can extend up to 14 years depending on the case’s sensitivity. This punishment comes under Section 392 of Pakistan Penal Code-PPC."
    },
    {
      "key": "5",
      "section": "384",
      "lawName": "Extortion",
      "description": "The most common crime in our country is extortion and according to Section 384 of Pakistan Penal code Punishment punishment for extortion is imprisonment of either description for a term which may extend to three years, or with fine, or with both."
    },
    {
      "key": "6",
      "section": "295",
      "lawName": "Blasphemy",
      "description": "Many countries argue on the point that whether insulting or defamation of any religion, holy personages and religious artifacts is a crime or not and they all have some kind of law to maintain religious harmony in their countries. In Pakistan this crime is bigger than all other crimes, a murderer gets out on bail but an offender of this law goes down the sand. Blasphemy law is divided in two section 295 B and 295 C. The punishment for 295 C is for those who desecrates or damages the Holy Quran. The one one who does this derogatory act shall be punished with lifetime imprisonment.The offender of 295-C faces more severe punishment. According to this law whoever commits blasphemy by words, either spoken or written, or by visible representation or by any imputation, innuendo, or insinuation, directly or indirectly, defiles the sacred name of the Holy Prophet Muhammad (peace be upon him) shall be punished with death, or imprisonment for life, and shall also be liable to fine."
    },
    {
      "key": "7",
      "section": "379",
      "lawName": "Theft (Electric and gas)",
      "description": "Section 379 of Pakistan Penal Code defines the punishment for utility services such as electricity, gas or telephone stealing, as whoever commits theft shall be punished with the maximum imprisonment of  three years, or with fine, or with both."
    },
    {
      "key": "8",
      "section": "325",
      "lawName": "Attempt to commit Suicide",
      "description": "Suicide is prohibited in Islam and Pakistan Penal Code considers an attempt to commit suicide, a crime. The court has also defined the punishment for this crime in Section 325. According to the law whoever attempts to commit suicide, shall be punished with simple imprisonment for a term which may extend to one year, or with fine, or with both."
    },
    {
      "key": "9",
      "section": "295-B",
      "lawName": "Defiling the Holy Quran",
      "description": "Defiling the Holy Quran is a grave offense under Section 295-B of the Pakistan Penal Code. Anyone who desecrates the Quran, intentionally or maliciously, can face imprisonment for life. The law aims to protect religious sentiments and uphold the sanctity of the Quran. However, controversies surrounding blasphemy laws persist, raising concerns about misuse and human rights implications."
    },
    {
      "key": "10",
      "section": "376-A",
      "lawName": "Rape of Minors",
      "description": "Section 376-A deals specifically with the rape of minors. If an adult commits sexual assault against a child below the age of 16, they can be prosecuted under this section. The punishment includes imprisonment for life or even the death penalty. Protecting vulnerable children from sexual exploitation is the primary objective of this law."
    },
    {
      "key": "11",
      "section": "354-D",
      "lawName": "Stalking",
      "description": "Stalking is addressed under Section 354-D of the PPC. It involves unwanted and persistent attention, surveillance, or following someone, causing fear or distress. The law aims to protect victims from harassment. Penalties may include imprisonment and fines. Creating awareness about stalking and encouraging reporting are essential for effective implementation."
    },
    {
      "key": "12",
      "section": "497",
      "lawName": "Adultery",
      "description": "Adultery is prohibited under Section 497. If a married person engages in sexual relations with someone other than their spouse, it constitutes adultery. The law focuses on maintaining marital fidelity. However, debates continue about its relevance and gender bias, as it only penalizes men involved in extramarital affairs."
    },
    {
      "key": "13",
      "section": "509",
      "lawName": "Insulting the Modesty of a Woman",
      "description": "Section 509 addresses offenses related to insulting a woman’s modesty. It criminalizes gestures, words, or acts that offend a woman’s dignity. The punishment includes imprisonment or a fine. Upholding respect for women and combating harassment are central to this provision."
    },
    {
      "key": "14",
      "section": "420-A",
      "lawName": "Cyber Crimes",
      "description": "With the rise of technology, Section 420-A tackles cybercrimes. It covers offenses related to online fraud, identity theft, hacking, and spreading false information. The penalties vary based on the severity of the offense. Ensuring cybersecurity awareness and robust legal enforcement are crucial."
    },
    {
      "key": "15",
      "section": "354-B",
      "lawName": "Acid Attacks",
      "description": "Acid attacks cause severe physical and emotional trauma. Section 354-B addresses this heinous crime. Perpetrators who throw acid on someone with malicious intent can face imprisonment for life. The law aims to prevent such attacks and support survivors."
    },
    {
      "key": "16",
      "section": "509-A",
      "lawName": "Harassment at the Workplace",
      "description": "Section 509-A focuses on workplace harassment. Employers must provide a safe environment free from harassment. The law covers verbal, physical, or psychological abuse. Employers failing to address complaints may face penalties. Promoting respectful workplaces is essential."
    },
    {
      "key": "17",
      "section": "365-B",
      "lawName": "Kidnapping for Ransom",
      "description": "Kidnapping for ransom is a serious offense. Section 365-B deals with abducting someone with the intent to demand ransom. The punishment includes imprisonment or even the death penalty. Safeguarding citizens from abduction is paramount."
    },
    {
      "key": "18",
      "section": "295-A",
      "lawName": "Deliberate Acts to Outrage Religious Feelings",
      "description": "Section 295-A addresses offenses related to hurting religious sentiments intentionally. It aims to maintain communal harmony. However, balancing free speech and preventing misuse remains a challenge."
}   

];
// Convert JS Object to JSON String
const jsonString = JSON.stringify(lawsData, null, 2); // The third argument (2) is for indentation for better readability

// Write JSON String to a separate JSON file
fs.writeFileSync('./lawsData.json', jsonString, 'utf-8');

console.log('Conversion completed. JSON data written to lawsData.json');