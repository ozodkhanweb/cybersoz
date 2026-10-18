// Savol | to‘g‘ri javob | noto‘g‘ri 1 | 2 | 3
const BANK = [
  "e|Kod yozuvchi shaxs sof o‘zbekcha qanday ataladi?|Dasturchi|Haydovchi|Quruvchi|Shifokor",
  "e|Kompyuterga buyruq beruvchi yozuvlar to‘plamining o‘zbekcha nomi nima?|Dastur|Jadval|Rasm|Kitob",
  "e|Kirish uchun ishlatiladigan yashirin so‘zning sof o‘zbekcha nomi qaysi?|Maxfiy so‘z|Ochiq so‘z|Tez so‘z|Oddiy gap",
  "e|Boshqa sahifaga o‘tkazuvchi bog‘lanishning o‘zbekcha nomi qaysi?|Havola|Eshik|Ko‘prik|Yo‘lak",
  "e|Download|Yuklab olish|O‘chirish|Chiqarish|Nusxalash",
  "e|Upload|Yuklash|Olib tashlash|Yopish|Ko‘rish",
  "e|Screenshot|Ekran surati|Ekran yozuvi|Ekran qismi|Ekran bo‘yog‘i",
  "e|Backup|Zaxira nusxa|Asosiy nusxa|Yangi nusxa|Qisqa nusxa",
  "e|Settings|Sozlamalar|Xabarlar|Fayllar|Rasmlar",
  "e|Update|Yangilash|O‘chirish|Yopish|Saqlash",
  "e|Search|Qidirish|Saqlash|O‘chirish|Yopish",
  "e|Save|Saqlash|O‘chirish|Nusxalash|Yuborish",
  "e|Delete|O‘chirish|Saqlash|Yuklash|Qidirish",
  "e|Network|Tarmoq|Ekran|Dastur|Belgi",
  "e|Message|Xabar|Rasm|Havola|Fayl",
  "e|Window|Oyna|Eshik|Devor|Tom",
  "e|Cloud|Bulut|Tuman|Shamol|Yomg‘ir",
  "e|Malware|Zararli dastur|Foydali dastur|Tezkor dastur|Eski dastur",
  "e|Email|Elektron pochta|Qog‘oz xat|Eshik xati|Telegramma",
  "e|Folder|Jild|Quti|Javon|Tokcha",
  "e|Cursor|Ko‘rsatkich|Belgi|Chizg‘ich|Yo‘lboshchi",
  "e|Artificial intelligence|Sun’iy intellekt|Tabiiy intellekt|Tezkor intellekt|Kichik intellekt",
  "e|Database|Ma’lumotlar bazasi|Fayl papkasi|Ekran bazasi|Dastur ombori",
  "e|Cybersecurity|Kiberxavfsizlik|Kibertarmoq|Kiberxabar|Kiberdastur",
  "e|Spam|Keraksiz xabar|Muhim xabar|Tezkor xabar|Yangi xabar",
  "h|Vulnerability|Zaiflik|Kuchlilik|Tezlik|Aniqlik",
  "h|Threat|Tahdid|Yordam|Vosita|Ogohlik",
  "h|Cyber attack|Kiberhujum|Kiberhimoya|Kibertekshiruv|Kiberyordam",
  "m|Encryption|Shifrlash|Siqish|Yashirish|Arxivlash",
  "m|Decryption|Shifrni ochish|Shifrni yopish|Shifrni o‘chirish|Shifrni siqish",
  "m|Encryption key|Shifr kaliti|Shifr qulfi|Shifr eshigi|Shifr belgisi",
  "h|Authentication|Shaxsni tasdiqlash|Shaxsni yashirish|Shaxsni o‘chirish|Shaxsni saqlash",
  "h|Two-factor authentication|Ikki bosqichli tasdiqlash|Qo‘sh parol|Ikki marta kirish|Tez chiqish",
  "m|Firewall|Xavfsizlik devori|Olov to‘siq|Himoya eshigi|Tarmoq qulfi",
  "h|Spyware|Josuslik dasturi|Kuzatuv ekrani|Yashirin fayl|Maxfiy papka",
  "h|Ransomware|To‘lov talab qiluvchi dastur|Pul yig‘uvchi dastur|Bepul dastur|Hisob dasturi",
  "h|Privacy|Maxfiylik|Ochiqlik|Tezkorlik|Soddalik",
  "h|Data leak|Ma’lumotlar sizib chiqishi|Ma’lumotlar yig‘ilishi|Ma’lumotlar ko‘payishi|Ma’lumotlar yangilanishi",
  "h|Digital footprint|Raqamli iz|Raqamli qadam|Raqamli chiziq|Raqamli muhr",
  "h|Digital signature|Elektron raqamli imzo|Raqamli qo‘l|Kompyuter muhri|Tarmoq imzosi",
  "h|Virtual private network (VPN)|Virtual xususiy tarmoq|Virtual ochiq tarmoq|Umumiy tarmoq|Xayoliy tarmoq",
  "m|Access rights|Kirish huquqi|Kirish narxi|Kirish tezligi|Kirish rangi",
  "h|Log file|Voqealar jurnali|Voqealar kitobi|Vaqt rasmi|Tizim devori",
  "m|Debugging|Nosozliklarni tuzatish|Nosozliklarni yig‘ish|Kodni o‘chirish|Dasturni yopish",
  "m|Source code|Manba kodi|Asl kod|Boshlang‘ich yozuv|Ildiz matni",
  "m|Open source|Ochiq manbali|Bepul ilova|Ochiq tarmoq|Erkin kod",
  "m|Software|Dasturiy ta’minot|Apparat ta’minoti|Tarmoq ta’minoti|Elektr ta’minoti",
  "m|Hardware|Apparat ta’minoti|Dasturiy ta’minot|Axborot ta’minoti|Tarmoq ta’minoti",
  "m|Bandwidth|O‘tkazuvchanlik qobiliyati|Kenglik chizig‘i|Tarmoq balandligi|Yuklama hajmi",
  "m|Machine learning|Mashinaviy o‘qitish|Mashinali o‘rganish|Kompyuter o‘qitishi|Avtomatik bilim",
  "m|Blockchain|Bloklar zanjiri|Bloklar tarmog‘i|Halqa zanjiri|Raqamli devor",
  "m|Internet of Things|Narsalar interneti|Buyumlar tarmog‘i|Asboblar aloqasi|Jihozlar ulanishi",
  "m|Bookmark|Xatcho‘p|Belgi varag‘i|Saqlangan sahifa|Sahifa tikuvi",
  "m|Attachment|Biriktirilgan fayl|Qo‘shilgan xat|Ilova xati|Yopishgan hujjat",
  "m|Notification|Bildirishnoma|Eslatma|Ogohlik|Maslahat",
  "m|Shortcut|Yorliq|Eshik|Ko‘prik|Tugma",
  "m|Mobile application|Mobil ilova|Ko‘chma dastur|Telefon fayli|Harakatdagi ilova",
  "m|Real-time|Real vaqt|Haqiqiy soat|Tezkor payt|Joriy kun",
  "h|Qurilmaga yashirincha o‘rnatilib foydalanuvchini kuzatuvchi dasturning sof o‘zbekcha nomi qaysi?|Josuslik dasturi|Kuzatuv ekrani|Yashirin fayl|Maxfiy papka",
  "m|Ma’lumotni begonalar o‘qiy olmasligi uchun kodga o‘tkazishning sof o‘zbekcha nomi qaysi?|Shifrlash|Siqish|Yashirish|Arxivlash",
  "m|Tizimga nom va maxfiy so‘z bilan kirishning o‘zbekcha nomi qaysi?|Tizimga kirish|Tizimdan chiqish|Ro‘yxatdan o‘tish|Parolni tiklash",
  "m|Dastur yaratuvchi shaxs yoki jamoaning o‘zbekcha nomi qaysi?|Ishlab chiquvchi|Foydalanuvchi|Mehmon|Sinovchi",
  "h|Confidentiality|Maxfiylik|Ochiqlik|Tezkorlik|Soddalik",
  "h|Integrity (axborotda)|Yaxlitlik|Tezlik|Hajm|Rang",
  "h|Availability (axborotda)|Mavjudlik|Yo‘qlik|Nusxalik|Tezlik",
  "h|Authorization|Ruxsat berish|Ruxsat olish|Ruxsatni yashirish|Ruxsatni o‘chirish",
  "h|Access control|Kirishni boshqarish|Kirishni to‘xtatish|Kirishni yashirish|Kirishni yuklash",
  "h|Social engineering|Ijtimoiy muhandislik|Ijtimoiy tarmoq|Jamoat qurilishi|Ijtimoiy dastur",
  "h|Security incident|Xavfsizlik hodisasi|Xavfsizlik rasmi|Xavfsizlik narxi|Xavfsizlik yo‘li",
  "m|Risk (kiberxavfsizlikda)|Xavf|Foyda|Tezlik|Sifat",
  "m|Fake website|Soxta sayt|Yangi sayt|Tezkor sayt|Qisqa sayt",
  "h|Digital identity|Raqamli kimlik|Raqamli rasm|Raqamli nom|Raqamli belgi",
  "h|Password manager|Maxfiy so‘zlar boshqaruvchisi|Maxfiy so‘zlar o‘chirgichi|Maxfiy so‘zlar kitobi|Maxfiy so‘zlar qulfi",
  "m|Session|Seans|Sessiya|Yig‘in|Yo‘lak",
  "h|Malicious code|Zararli kod|Foydali kod|Tezkor kod|Eski kod",
  "h|Neural network|Neyron tarmoq|Asab tizimi|Miya kabeli|Tolalar tarmog‘i",
  "m|Big data|Katta ma’lumotlar|Ko‘p fayllar|Og‘ir hajmlar|Keng bazalar",
  "h|Augmented reality|Kengaytirilgan voqelik|Qo‘shimcha tasavvur|Katta voqelik|Aralash ko‘rinish",
  "h|Cloud computing|Bulutli hisoblash|Havoli hisoblash|Osmon hisobi|Bulutli saqlash",
  "h|Data center|Ma’lumotlarni qayta ishlash markazi|Axborot uyi|Fayllar ombori|Server xonasi",
  "h|Axborotning o‘zgartirilmay, to‘liq saqlanish xususiyatining sof o‘zbekcha nomi qaysi?|Yaxlitlik|Tezlik|Hajm|Rang",
  "h|Odamlarning ishonchidan foydalanib aldab ma’lumot olish usulining o‘zbekcha nomi qaysi?|Ijtimoiy muhandislik|Ijtimoiy tarmoq|Jamoat qurilishi|Ijtimoiy dastur",
  "h|Foydalanuvchi kimligi tasdiqlangach unga amallarga yo‘l ochish jarayonining o‘zbekcha nomi qaysi?|Ruxsat berish|Ruxsat olish|Ruxsatni yashirish|Ruxsatni o‘chirish",
  "h|Public key|Ochiq kalit|Umumiy kalit|Bepul kalit|Katta kalit",
  "h|Private key|Maxfiy kalit|Ochiq kalit|Umumiy kalit|Bepul kalit",
  "h|Latency|Kechikish|Tezlik|Yuklanish|Uzilish",
  "h|Scalability|Kengayuvchanlik|Kichrayuvchanlik|Tezkorlik|Moslashuvchanlik",
  "h|Deep learning|Chuqur o‘qitish|Uzun o‘qitish|Tez o‘qitish|Qattiq o‘qitish",
  "h|Repository|Ombor|Quti|Javon|Xona",
  "h|Version control|Versiyalarni boshqarish|Versiyalarni o‘chirish|Versiyalarni yashirish|Versiyalarni siqish",
  "h|Quantum computing|Kvant hisoblash|Kvant yozuvi|Kvant tarmog‘i|Kvant xotira",
  "h|Open data|Ochiq ma’lumotlar|Bepul fayllar|Umumiy tarmoq|Erkin xotira",
  "h|Biometric authentication|Biometrik tasdiqlash|Biologik kirish|Tana paroli|Barmoq kaliti",
  "p|Zero-day vulnerability|Nolinchi kun zaifligi|Birinchi kun zaifligi|Yangi kun xatosi|Oxirgi kun zaifligi",
  "p|Man-in-the-middle attack|O‘rtadagi odam hujumi|Oradagi qo‘shni hujumi|Markaziy odam himoyasi|Ikki yoqlama hujum",
  "p|Fault tolerance|Nosozlikka chidamlilik|Nosozlikka moyillik|Nosozlikni yashirish|Nosozlikni yig‘ish",
  "p|Load balancing|Yuklamani taqsimlash|Yuklamani yig‘ish|Yuklamani oshirish|Yuklamani yashirish",
  "p|Cyber resilience|Kiberbardoshlilik|Kiberhimoya|Kiberyengillik|Kibertezlik",
  "p|Digital forensics|Raqamli sud ekspertizasi|Raqamli sud hukmi|Raqamli tergov dasturi|Raqamli iz qidiruvi",
  "p|Threat model|Tahdidlar modeli|Tahdidlar jadvali|Tahdidlar bazasi|Tahdidlar rasmi",
  "p|Data masking|Ma’lumotni niqoblash|Ma’lumotni o‘chirish|Ma’lumotni siqish|Ma’lumotni yangilash",
  "p|Anonymization|Shaxssizlantirish|Shaxsni yashirish|Shaxsni tasdiqlash|Shaxsni saqlash",
  "p|Computer vision|Mashina ko‘rishi|Kompyuter ko‘zi|Ekran ko‘rishi|Tasvir ko‘rishi",
  "p|Speech recognition|Nutqni aniqlash|Nutqni yozish|Nutqni siqish|Nutqni o‘chirish",
  "p|Natural language processing|Tabiiy tilni qayta ishlash|Tabiiy tilni yozish|Oddiy tilni o‘qitish|Tabiiy tilni tarjima qilish",
  "p|Intrusion detection system|Bosqinni aniqlash tizimi|Bosqinni to‘xtatish dasturi|Kirishni yopish tizimi|Hujumni yig‘ish tizimi",
  "p|Digital twin|Raqamli egizak|Raqamli nusxa|Raqamli qo‘sh|Raqamli ayna",
  "p|Shifrlash va ochishda bir xil kalit ishlatiladigan usulning o‘zbekcha nomi qaysi?|Simmetrik shifrlash|Asimmetrik shifrlash|Ochiq shifrlash|Tezkor shifrlash",
  "p|Shifrlash uchun ochiq, ochish uchun maxfiy kalit ishlatiladigan usul qanday ataladi?|Asimmetrik shifrlash|Simmetrik shifrlash|Ochiq shifrlash|Oddiy shifrlash",
  "p|Fayl butunligini tekshirish uchun hisoblanadigan qiymatning o‘zbekcha nomi qaysi?|Nazorat yig‘indisi|Nazorat belgisi|Nazorat rasmi|Nazorat kaliti",
  "p|Hujum xavfining darajasini oldindan aniqlash jarayoni qanday ataladi?|Xavfni baholash|Xavfni yashirish|Xavfni oshirish|Xavfni yig‘ish",
  "p|Katta ma’lumotlar ichidan yashirin qonuniyatlarni topish qanday ataladi?|Ma’lumotlarni qazib olish|Ma’lumotlarni yig‘ish|Ma’lumotlarni siqish|Ma’lumotlarni yozish",
  "p|Bitta kompyuterda bir nechta virtual muhit yaratishning o‘zbekcha nomi qaysi?|Virtuallashtirish|Birlashtirish|Ko‘paytirish|Taqsimlash",
  "h|Hash function|Xesh-funksiya|Shifr-funksiya|Siqish funksiyasi|Kalit funksiyasi",
  "h|Data breach|Ma’lumotlar buzilishi|Ma’lumotlar sotilishi|Ma’lumotlar yig‘ilishi|Ma’lumotlar siqilishi",
  "h|Cyber defense|Kiberhimoya|Kiberhujum|Kiberxavf|Kibertahdid",
  "h|Safe mode|Xavfsiz rejim|Xavfsiz holat|Himoya rejimi|Qulf rejimi",
  "h|Timestamp|Vaqt tamg‘asi|Vaqt rasmi|Vaqt belgisi|Vaqt chizig‘i",
  "h|Data recovery|Ma’lumotlarni tiklash|Ma’lumotlarni yig‘ish|Ma’lumotlarni siqish|Ma’lumotlarni o‘chirish",
  "h|Remote access|Masofaviy kirish|Uzoq kirish|Yaqin kirish|Tashqi kirish",
  "h|Template|Andoza|Yo‘rnak|Namuna fayli|Qolip",
  "h|Username|Foydalanuvchi nomi|Ishlab chiquvchi nomi|Mehmon nomi|Tizim nomi",
  "h|Plugin|Qo‘shimcha modul|Ichki dastur|Tashqi fayl|Yordamchi rasm",
  "h|Domain name|Domen nomi|Sayt rasmi|Tarmoq belgisi|Server manzili",
  "p|Denial-of-service attack|Xizmat ko‘rsatishni to‘xtatish hujumi|Xizmat ko‘rsatishni tezlatish hujumi|Xizmat ko‘rsatishni yashirish hujumi|Xizmat ko‘rsatishni yig‘ish hujumi",
  "p|Foydalanuvchiga faqat zarur huquqlarni berish tamoyilining o‘zbekcha nomi qaysi?|Minimal imtiyozlar tamoyili|Maksimal imtiyozlar tamoyili|Teng imtiyozlar tamoyili|Yopiq imtiyozlar tamoyili",
  "x|Cyber attack – Cyber defense – Cybersecurity – Cyber resilience|Kiberhujum – Kiberhimoya – Kiberxavfsizlik – Kiberbardoshlilik|Kiberhujum – Kiberxavfsizlik – Kiberhimoya – Kiberbardoshlilik|Kiberhimoya – Kiberhujum – Kiberxavfsizlik – Kiberbardoshlilik|Kiberhujum – Kiberhimoya – Kiberbardoshlilik – Kiberxavfsizlik",
  "x|Encryption – Decryption – Encryption key – Digital signature|Shifrlash – Shifrni ochish – Shifr kaliti – Elektron raqamli imzo|Shifrni ochish – Shifrlash – Shifr kaliti – Elektron raqamli imzo|Shifrlash – Shifrni ochish – Elektron raqamli imzo – Shifr kaliti|Shifrlash – Shifr kaliti – Shifrni ochish – Elektron raqamli imzo",
  "x|Vulnerability – Threat – Risk – Incident|Zaiflik – Tahdid – Xavf – Hodisa|Tahdid – Zaiflik – Xavf – Hodisa|Zaiflik – Xavf – Tahdid – Hodisa|Zaiflik – Tahdid – Hodisa – Xavf",
  "x|Authentication – Authorization – Access control – Log file|Shaxsni tasdiqlash – Ruxsat berish – Kirishni boshqarish – Voqealar jurnali|Ruxsat berish – Shaxsni tasdiqlash – Kirishni boshqarish – Voqealar jurnali|Shaxsni tasdiqlash – Kirishni boshqarish – Ruxsat berish – Voqealar jurnali|Shaxsni tasdiqlash – Ruxsat berish – Voqealar jurnali – Kirishni boshqarish",
  "x|Public key – Private key – Symmetric encryption – Asymmetric encryption|Ochiq kalit – Maxfiy kalit – Simmetrik shifrlash – Asimmetrik shifrlash|Maxfiy kalit – Ochiq kalit – Simmetrik shifrlash – Asimmetrik shifrlash|Ochiq kalit – Maxfiy kalit – Asimmetrik shifrlash – Simmetrik shifrlash|Ochiq kalit – Maxfiy kalit – Simmetrik shifrlash – Ochiq shifrlash",
  "x|Backup – Restore – Data recovery – Data breach|Zaxira nusxa – Tiklash – Ma’lumotlarni tiklash – Ma’lumotlar buzilishi|Tiklash – Zaxira nusxa – Ma’lumotlarni tiklash – Ma’lumotlar buzilishi|Zaxira nusxa – Tiklash – Ma’lumotlar buzilishi – Ma’lumotlarni tiklash|Zaxira nusxa – Ma’lumotlarni tiklash – Tiklash – Ma’lumotlar buzilishi",
  "x|Hardware – Software – Open source – Source code|Apparat ta’minoti – Dasturiy ta’minot – Ochiq manbali – Manba kodi|Dasturiy ta’minot – Apparat ta’minoti – Ochiq manbali – Manba kodi|Apparat ta’minoti – Dasturiy ta’minot – Manba kodi – Ochiq manbali|Apparat ta’minoti – Ochiq manbali – Dasturiy ta’minot – Manba kodi",
  "x|Login – Logout – Register – Password manager|Tizimga kirish – Tizimdan chiqish – Ro‘yxatdan o‘tish – Maxfiy so‘zlar boshqaruvchisi|Tizimdan chiqish – Tizimga kirish – Ro‘yxatdan o‘tish – Maxfiy so‘zlar boshqaruvchisi|Tizimga kirish – Ro‘yxatdan o‘tish – Tizimdan chiqish – Maxfiy so‘zlar boshqaruvchisi|Tizimga kirish – Tizimdan chiqish – Maxfiy so‘zlar boshqaruvchisi – Ro‘yxatdan o‘tish",
  "x|Bandwidth – Latency – Scalability – Fault tolerance|O‘tkazuvchanlik qobiliyati – Kechikish – Kengayuvchanlik – Nosozlikka chidamlilik|Kechikish – O‘tkazuvchanlik qobiliyati – Kengayuvchanlik – Nosozlikka chidamlilik|O‘tkazuvchanlik qobiliyati – Kengayuvchanlik – Kechikish – Nosozlikka chidamlilik|O‘tkazuvchanlik qobiliyati – Kechikish – Nosozlikka chidamlilik – Kengayuvchanlik",
  "x|Machine learning – Deep learning – Neural network – Big data|Mashinaviy o‘qitish – Chuqur o‘qitish – Neyron tarmoq – Katta ma’lumotlar|Chuqur o‘qitish – Mashinaviy o‘qitish – Neyron tarmoq – Katta ma’lumotlar|Mashinaviy o‘qitish – Neyron tarmoq – Chuqur o‘qitish – Katta ma’lumotlar|Mashinaviy o‘qitish – Chuqur o‘qitish – Katta ma’lumotlar – Neyron tarmoq",
  "x|Spyware – Ransomware – Malicious code – Firewall|Josuslik dasturi – To‘lov talab qiluvchi dastur – Zararli kod – Xavfsizlik devori|To‘lov talab qiluvchi dastur – Josuslik dasturi – Zararli kod – Xavfsizlik devori|Josuslik dasturi – Zararli kod – To‘lov talab qiluvchi dastur – Xavfsizlik devori|Josuslik dasturi – To‘lov talab qiluvchi dastur – Xavfsizlik devori – Zararli kod",
  "x|Digital footprint – Digital identity – Digital signature – Digital forensics|Raqamli iz – Raqamli kimlik – Elektron raqamli imzo – Raqamli sud ekspertizasi|Raqamli kimlik – Raqamli iz – Elektron raqamli imzo – Raqamli sud ekspertizasi|Raqamli iz – Elektron raqamli imzo – Raqamli kimlik – Raqamli sud ekspertizasi|Raqamli iz – Raqamli kimlik – Raqamli sud ekspertizasi – Elektron raqamli imzo",
  "x|Hujumchi bank hisobidagi summani ruxsatsiz o‘zgartirib yubordi. Axborot xavfsizligining qaysi xususiyati buzildi?|Yaxlitlik|Maxfiylik|Mavjudlik|Shifrlash",
  "x|Hujum tufayli server to‘xtab, foydalanuvchilar saytga kira olmadi. Qaysi xususiyat buzildi?|Mavjudlik|Maxfiylik|Yaxlitlik|Xavf",
  "x|Begona shaxs xodimning shaxsiy xatlarini o‘qib oldi. Qaysi xususiyat buzildi?|Maxfiylik|Yaxlitlik|Mavjudlik|Zaiflik",
  "x|Foydalanuvchi maxfiy so‘z kiritdi va tizim uning kimligini tekshirdi. Bu jarayon nima deyiladi?|Shaxsni tasdiqlash|Ruxsat berish|Kirishni boshqarish|Shifrlash",
  "x|Tizim tasdiqlangan foydalanuvchiga faqat o‘z papkasini ochishga yo‘l berdi. Bu jarayon nima deyiladi?|Ruxsat berish|Shaxsni tasdiqlash|Shifrlash|Zaxiralash",
  "x|Zaiflik, tahdid va xavfdan qaysi biri tizimdagi nuqsonning o‘zini bildiradi?|Zaiflik|Tahdid|Xavf|Hodisa",
  "x|Tizimga zarar yetkazishi mumkin bo‘lgan potensial sabab qaysi atama bilan ataladi?|Tahdid|Zaiflik|Xavf|Hodisa",
  "x|Zaiflikdan foydalanib zarar yetkazish ehtimoli va oqibatlari o‘lchovi nima deyiladi?|Xavf|Tahdid|Zaiflik|Hodisa",
  "x|Quyidagi qatorlarning qaysi birida tarjima xato berilgan?|Backup – Zaxira nusxa; Restore – Yangilash|Backup – Zaxira nusxa; Restore – Tiklash|Update – Yangilash; Search – Qidirish|Save – Saqlash; Delete – O‘chirish",
  "x|Quyidagi qatorlarning qaysi birida tarjima xato berilgan?|Firewall – Xavfsizlik devori; VPN – Virtual ochiq tarmoq|Firewall – Xavfsizlik devori; VPN – Virtual xususiy tarmoq|Threat – Tahdid; Risk – Xavf|Spyware – Josuslik dasturi; Ransomware – To‘lov talab qiluvchi dastur",
  "x|Quyidagi qatorlarning qaysi birida tarjima xato berilgan?|Public key – Ochiq kalit; Private key – Umumiy kalit|Public key – Ochiq kalit; Private key – Maxfiy kalit|Encryption – Shifrlash; Decryption – Shifrni ochish|Latency – Kechikish; Scalability – Kengayuvchanlik",
  "x|Quyidagi qatorlarning qaysi birida tarjima xato berilgan?|Hardware – Dasturiy ta’minot; Software – Apparat ta’minoti|Hardware – Apparat ta’minoti; Software – Dasturiy ta’minot|Upload – Yuklash; Download – Yuklab olish|Login – Tizimga kirish; Logout – Tizimdan chiqish",
  "x|Xodim tizimga kirdi: avval kimligi tekshirildi, so‘ng faqat o‘z hisobotlarini ochishga yo‘l berildi. Bosqichlarning to‘g‘ri tartibi qaysi?|Shaxsni tasdiqlash, keyin ruxsat berish|Ruxsat berish, keyin shaxsni tasdiqlash|Shifrlash, keyin tiklash|Zaxiralash, keyin tiklash",
  "x|Hujumdan keyin kim, qachon va qaysi amalni bajarganini aniqlash uchun ma’mur nimani o‘qiydi?|Voqealar jurnalini|Shifr kalitini|Zaxira nusxani|Xesh-funksiyani",
  "x|Fayl o‘zgartirilmaganini tekshirish uchun asl va yangi hisoblangan qiymat solishtiriladi. Bu qiymat qanday ataladi?|Nazorat yig‘indisi|Ochiq kalit|Maxfiy so‘z|Voqealar jurnali",
  "x|Xabar kimdan kelganini va yo‘lda o‘zgarmaganini tasdiqlovchi vosita qaysi?|Elektron raqamli imzo|Shifr kaliti|Xavfsizlik devori|Zaxira nusxa",
  "x|Ikki tomon bir xil kalit bilan shifrlab, shu kalit bilan ochsa, bu qanday usul?|Simmetrik shifrlash|Asimmetrik shifrlash|Ma’lumotni niqoblash|Shaxssizlantirish",
  "x|Shaxsiy ma’lumotlarni haqiqiyga o‘xshash, ammo soxta qiymatlar bilan almashtirish usuli qaysi?|Ma’lumotni niqoblash|Shifrlash|Siqish|Zaxiralash",
  "x|Ma’lumotdan shaxsni aniqlash imkoniyatini butunlay yo‘qotish jarayoni qanday ataladi?|Shaxssizlantirish|Ma’lumotni niqoblash|Shifrlash|Tiklash",
  "x|Hujumchi ikki tomon aloqasiga yashirincha aralashib, xabarlarni ushlab turdi. Bu qaysi hujum?|O‘rtadagi odam hujumi|Xizmat ko‘rsatishni to‘xtatish hujumi|To‘lov talab qiluvchi hujum|Ijtimoiy muhandislik",
  "x|Server ortiqcha so‘rovlar bilan to‘ldirilib, qonuniy foydalanuvchilarga xizmat ko‘rsata olmay qoldi. Bu qaysi hujum?|Xizmat ko‘rsatishni to‘xtatish hujumi|O‘rtadagi odam hujumi|To‘lov talab qiluvchi hujum|Ijtimoiy muhandislik",
  "x|Ishlab chiquvchiga hali ma’lum bo‘lmagan zaiflikdan foydalanish qaysi atama bilan bog‘liq?|Nolinchi kun zaifligi|Zararli kod|Xavfsizlik hodisasi|Kirish huquqi",
  "x|Bir nechta server o‘rtasida so‘rovlarni teng bo‘lib, yuklama oshib ketishidan saqlash nima deyiladi?|Yuklamani taqsimlash|Nosozlikka chidamlilik|Kengayuvchanlik|Kechikish",
  "x|Bitta server ishdan chiqsa ham tizim ishlashda davom etish qobiliyati qanday ataladi?|Nosozlikka chidamlilik|Yuklamani taqsimlash|Kengayuvchanlik|O‘tkazuvchanlik qobiliyati",
  "x|Foydalanuvchilar soni oshganda tizim ishini pasaytirmay kengaya olish xususiyati qaysi?|Kengayuvchanlik|Nosozlikka chidamlilik|Kechikish|Maxfiylik",
  "x|So‘rov yuborilgandan javob kelgunga qadar o‘tgan vaqt qanday ataladi?|Kechikish|O‘tkazuvchanlik qobiliyati|Kengayuvchanlik|Yuklamani taqsimlash",
  "x|Hujumdan keyin dalillarni yo‘qotmasdan to‘plash va tahlil qilish sohasi qaysi?|Raqamli sud ekspertizasi|Ma’lumotlarni qazib olish|Xavfni baholash|Zaxira nusxa olish",
  "x|Parol o‘rniga barmoq izi yoki yuz bilan kirish usuli qanday ataladi?|Biometrik tasdiqlash|Ikki bosqichli tasdiqlash|Ruxsat berish|Shifrlash",
  "x|Tarmoqdagi shubhali harakatlarni kuzatib, ogohlantirib turuvchi tizim qaysi?|Bosqinni aniqlash tizimi|Xavfsizlik devori|Maxfiy so‘zlar boshqaruvchisi|Zaxira nusxa",
  "x|Ichki tarmoqqa tashqaridan kirishni qoidalar bo‘yicha cheklovchi to‘siq qaysi?|Xavfsizlik devori|Bosqinni aniqlash tizimi|Virtual xususiy tarmoq|Voqealar jurnali",
  "x|Jamoat Wi-Fi tarmog‘ida ma’lumotni shifrlangan tunnel orqali yuborish uchun nima ishlatiladi?|Virtual xususiy tarmoq|Xavfsizlik devori|Bosqinni aniqlash tizimi|Zaxira nusxa",
  "x|Foydalanuvchining internetda qoldirgan barcha izlari majmuasi qanday ataladi?|Raqamli iz|Raqamli kimlik|Raqamli egizak|Elektron raqamli imzo",
  "x|Jismoniy obyektning real vaqtdagi raqamli nusxasi qanday ataladi?|Raqamli egizak|Raqamli iz|Raqamli kimlik|Elektron raqamli imzo",
].map((s) => {
  const p = s.split("|"),
    T = [
      "“X” atamasining sof o‘zbekcha nomi qaysi?",
      "“X” so‘zini o‘zbekcha qanday aytamiz?",
      "Quyidagi atamaning o‘zbekcha muqobilini toping: “X”",
    ];
  return {
    t: p[0],
    q: p[1].includes("?")
      ? p[1]
      : p[0] === "x"
      ? "Maxsus savol: to‘g‘ri o‘zbekcha tarjimani qat’iy tartibda toping — " +
        p[1]
      : T[Math.floor(Math.random() * 3)].replace("X", p[1]),
    a: p[2],
    o: p.slice(2),
  };
});
const pick = () =>
  [
    ["e", 2],
    ["m", 3],
    ["h", 3],
    ["p", 2],
  ].flatMap(([t, n]) => shuf(BANK.filter((x) => x.t === t)).slice(0, n));

const N = 10,
  T = 12,
  OK = 10,
  BAD = 5,
  TO = 5,
  PT = { e: 5, m: 10, h: 10, p: 15, x: 15 },
  TN = { e: "oson", m: "o‘rta", h: "qiyin", p: "pro", x: "EXTREME" },
  PN = { e: 5, m: 5, h: 5, p: 5, x: 10 },
  TT = { e: 12, m: 12, h: 11, p: 10, x: 12 };
const $ = (id) => document.getElementById(id);
const show = (id) =>
  ["s-start", "s-game", "s-end"].forEach((s) =>
    $(s).classList.toggle("hide", s !== id)
  );
const shuf = (a) => {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
let name = "",
  qs = [],
  i = 0,
  score = 0,
  left = T,
  tm = null,
  right = 0,
  locked = false,
  lost = false,
  cur = 12,
  streak = 0,
  xc = 0,
  XB = [];

const G = [
  [
    ["Cyber attack", "Kiberhujum"],
    ["Cyber defense", "Kiberhimoya"],
    ["Cybersecurity", "Kiberxavfsizlik"],
    ["Cyber resilience", "Kiberbardoshlilik"],
    ["Vulnerability", "Zaiflik"],
    ["Threat", "Tahdid"],
    ["Risk", "Xavf"],
    ["Security incident", "Xavfsizlik hodisasi"],
    ["Data breach", "Ma’lumotlar buzilishi"],
    ["Data leak", "Ma’lumotlar sizib chiqishi"],
  ],
  [
    ["Encryption", "Shifrlash"],
    ["Decryption", "Shifrni ochish"],
    ["Encryption key", "Shifr kaliti"],
    ["Public key", "Ochiq kalit"],
    ["Private key", "Maxfiy kalit"],
    ["Digital signature", "Elektron raqamli imzo"],
    ["Hash function", "Xesh-funksiya"],
    ["Symmetric encryption", "Simmetrik shifrlash"],
    ["Asymmetric encryption", "Asimmetrik shifrlash"],
    ["Checksum", "Nazorat yig‘indisi"],
  ],
  [
    ["Authentication", "Shaxsni tasdiqlash"],
    ["Authorization", "Ruxsat berish"],
    ["Access control", "Kirishni boshqarish"],
    ["Access rights", "Kirish huquqi"],
    ["Login", "Tizimga kirish"],
    ["Logout", "Tizimdan chiqish"],
    ["Register", "Ro‘yxatdan o‘tish"],
    ["Password manager", "Maxfiy so‘zlar boshqaruvchisi"],
    ["Two-factor authentication", "Ikki bosqichli tasdiqlash"],
    ["Biometric authentication", "Biometrik tasdiqlash"],
    ["Log file", "Voqealar jurnali"],
  ],
  [
    ["Spyware", "Josuslik dasturi"],
    ["Ransomware", "To‘lov talab qiluvchi dastur"],
    ["Malicious code", "Zararli kod"],
    ["Malware", "Zararli dastur"],
    ["Firewall", "Xavfsizlik devori"],
    ["VPN", "Virtual xususiy tarmoq"],
    ["Intrusion detection system", "Bosqinni aniqlash tizimi"],
    ["Denial-of-service attack", "Xizmat ko‘rsatishni to‘xtatish hujumi"],
    ["Man-in-the-middle attack", "O‘rtadagi odam hujumi"],
    ["Zero-day vulnerability", "Nolinchi kun zaifligi"],
  ],
  [
    ["Backup", "Zaxira nusxa"],
    ["Restore", "Tiklash"],
    ["Data recovery", "Ma’lumotlarni tiklash"],
    ["Data masking", "Ma’lumotni niqoblash"],
    ["Anonymization", "Shaxssizlantirish"],
    ["Database", "Ma’lumotlar bazasi"],
    ["Big data", "Katta ma’lumotlar"],
    ["Open data", "Ochiq ma’lumotlar"],
    ["Data center", "Ma’lumotlarni qayta ishlash markazi"],
    ["Data mining", "Ma’lumotlarni qazib olish"],
  ],
  [
    ["Bandwidth", "O‘tkazuvchanlik qobiliyati"],
    ["Latency", "Kechikish"],
    ["Scalability", "Kengayuvchanlik"],
    ["Fault tolerance", "Nosozlikka chidamlilik"],
    ["Load balancing", "Yuklamani taqsimlash"],
    ["Real-time", "Real vaqt"],
    ["Cloud computing", "Bulutli hisoblash"],
    ["Remote access", "Masofaviy kirish"],
    ["Network", "Tarmoq"],
    ["Virtualization", "Virtuallashtirish"],
  ],
  [
    ["Machine learning", "Mashinaviy o‘qitish"],
    ["Deep learning", "Chuqur o‘qitish"],
    ["Neural network", "Neyron tarmoq"],
    ["Natural language processing", "Tabiiy tilni qayta ishlash"],
    ["Computer vision", "Mashina ko‘rishi"],
    ["Speech recognition", "Nutqni aniqlash"],
    ["Source code", "Manba kodi"],
    ["Open source", "Ochiq manbali"],
    ["Debugging", "Nosozliklarni tuzatish"],
    ["Version control", "Versiyalarni boshqarish"],
    ["Hardware", "Apparat ta’minoti"],
    ["Software", "Dasturiy ta’minot"],
    ["Blockchain", "Bloklar zanjiri"],
    ["Internet of Things", "Narsalar interneti"],
    ["Digital twin", "Raqamli egizak"],
  ],
];
const rnd = (a) => a[Math.floor(Math.random() * a.length)];
function genX() {
  const g = shuf(rnd(G));
  const rr = Math.random();
  if (rr < 0.45) {
    const k = 4 + Math.floor(Math.random() * 2),
      it = g.slice(0, k),
      rest = g.slice(k),
      ok = it.map((x) => x[1]);
    const sw = (a, i, j) => {
      a = a.slice();
      [a[i], a[j]] = [a[j], a[i]];
      return a;
    };
    const r = ok.slice();
    r[Math.floor(Math.random() * k)] = rnd(rest)[1];
    const a = ok.join(" – "),
      i1 = Math.floor(Math.random() * (k - 1));
    return {
      t: "x",
      q:
        "Maxsus savol: to‘g‘ri o‘zbekcha tarjimani qat’iy tartibda toping — " +
        it.map((x) => x[0]).join(" – "),
      a,
      o: [
        a,
        sw(ok, i1, i1 + 1).join(" – "),
        sw(ok, 0, k - 1).join(" – "),
        r.join(" – "),
      ].filter((v, i, z) => z.indexOf(v) === i),
    };
  }
  if (rr >= 0.75) {
    const it = g.slice(0, 8),
      rest = g.slice(8),
      n = Math.floor(Math.random() * 4),
      bad = shuf([0, 1, 2, 3]).slice(0, n);
    const lines = [0, 1, 2, 3].map(
      (i) =>
        i +
        1 +
        ") " +
        [it[2 * i], it[2 * i + 1]]
          .map(
            (x, j) =>
              x[0] + " – " + (bad.includes(i) && j === 0 ? rnd(rest)[1] : x[1])
          )
          .join("; ")
    );
    return {
      t: "x",
      q:
        "Maxsus savol: quyidagi 4 qatorning nechtasida tarjima xato berilgan?\n" +
        lines.join("\n"),
      a: n ? n + " ta" : "Birortasida ham yo‘q",
      o: ["1 ta", "2 ta", "3 ta", "Birortasida ham yo‘q"],
    };
  }
  const it = g.slice(0, 8),
    rest = g.slice(8),
    L = [0, 1, 2, 3].map((n) => [it[2 * n], it[2 * n + 1]]);
  const f = Math.floor(Math.random() * 4),
    lines = L.map((l) => l.map((x) => x[0] + " – " + x[1]).join("; "));
  const bad = L[f]
    .map((x, i) => x[0] + " – " + (i ? x[1] : rnd(rest)[1]))
    .join("; ");
  return {
    t: "x",
    q: "Maxsus savol: quyidagi qatorlarning qaysi birida tarjima xato berilgan?",
    a: bad,
    o: lines.map((l, i) => (i === f ? bad : l)),
  };
}
const PK = "sozbon_played";
const norm = (t) =>
  t
    .toLowerCase()
    .replace(/[‘’ʻʼ`']/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .sort()
    .join(" ");
const played = () => {
  try {
    return JSON.parse(localStorage.getItem(PK) || "[]");
  } catch (e) {
    return [];
  }
};
function save() {
  try {
    const k = "sozbon_lb";
    let l = JSON.parse(localStorage.getItem(k) || "[]");
    l.push({ n: name, s: score, t: Date.now() });
    l.sort((a, b) => b.s - a.s);
    l = l.slice(0, 10);
    localStorage.setItem(k, JSON.stringify(l));
    return l;
  } catch (e) {
    return [{ n: name, s: score, t: 0 }];
  }
}
function start() {
  const f = $("fn").value.trim(),
    l = $("ln").value.trim();
  if (f.length < 2 || l.length < 2) {
    $("err").textContent = "Iltimos, ism va familiyangizni to‘liq kiriting.";
    return;
  }
  const key = norm(f + " " + l);
  if (played().includes(key)) {
    $("err").textContent =
      "Siz avval ishtirok etgansiz. Har bir ishtirokchiga bitta urinish beriladi.";
    return;
  }
  try {
    localStorage.setItem(PK, JSON.stringify(played().concat(key)));
  } catch (e) {}
  $("err").textContent = "";
  name = f + " " + l;
  lost = false;
  streak = 0;
  xc = 0;
  XB = shuf(
    BANK.filter((x) => x.t === "x").concat(Array.from({ length: 60 }, genX))
  );
  qs = pick();
  i = 0;
  score = 0;
  right = 0;
  $("who").textContent = name;
  show("s-game");
  next();
}
function next() {
  locked = false;
  if (streak >= 3 && xc < 3 && XB.length) {
    qs[i] = XB.pop();
    xc++;
  }
  const c = qs[i];
  $("num").textContent = i + 1;
  $("lv").textContent =
    TN[c.t] +
    " (+" +
    PT[c.t] +
    ") · eng ko‘pi: " +
    (score + qs.slice(i).reduce((a, q) => a + PT[q.t], 0));
  $("lv").style.color = lost ? "var(--red)" : "";
  $("sc").textContent = score;
  $("fb").textContent = "";
  $("fb").style.color = "";
  if (c.t === "x") {
    $("fb").textContent = "EXTREME savol! Xato yoki vaqt tugashi −10";
    $("fb").style.color = "var(--saf)";
  }
  $("q").style.color = c.t === "x" ? "var(--red)" : "";
  $("q").textContent = c.q;
  const box = $("opts");
  box.innerHTML = "";
  shuf(c.o).forEach((t) => {
    const b = document.createElement("button");
    b.className = "opt";
    b.textContent = t;
    b.onclick = () => answer(b, t);
    box.appendChild(b);
  });
  cur = TT[c.t];
  left = cur;
  tick();
  clearInterval(tm);
  tm = setInterval(() => {
    left--;
    tick();
    if (left <= 0) {
      clearInterval(tm);
      answer(null, null);
    }
  }, 1000);
}
function tick() {
  const b = $("bar");
  b.style.width = (left / cur) * 100 + "%";
  b.style.background =
    left <= 4 ? "var(--red)" : left <= 8 ? "var(--saf)" : "var(--tur)";
}
function answer(btn, t) {
  if (locked) return;
  locked = true;
  clearInterval(tm);
  const c = qs[i],
    fb = $("fb");
  document.querySelectorAll(".opt").forEach((b) => {
    b.disabled = true;
    if (b.textContent === c.a) b.classList.add("ok");
  });
  if (t === c.a) {
    const pt = PT[c.t];
    score += pt;
    right++;
    fb.textContent = "To‘g‘ri! +" + pt;
    fb.style.color = "var(--grn)";
  } else if (btn) {
    score -= PN[c.t];
    btn.classList.add("no");
    fb.textContent = "Noto‘g‘ri. −" + PN[c.t];
    fb.style.color = "var(--red)";
  } else {
    score -= PN[c.t];
    fb.textContent = "Vaqt tugadi. −" + PN[c.t];
    fb.style.color = "var(--red)";
  }
  $("sc").textContent = score;
  streak = t === c.a ? streak + 1 : 0;
  if (t !== c.a && !lost) {
    lost = true;
    fb.textContent += " Maksimal ball imkoni yopildi.";
  }
  setTimeout(() => {
    i++;
    i < N ? next() : finish();
  }, 1800);
}
function finish() {
  show("s-end");
  $("endwho").textContent = name;
  $("final").textContent = score;
  const r =
    score >= 85
      ? "So‘z ustasi"
      : score >= 70
      ? "Atamashunos"
      : score >= 45
      ? "Izlanuvchi"
      : "Boshlovchi";
  $("rank").textContent = r;
  $("sum").textContent =
    N +
    " ta savoldan " +
    right +
    " tasiga to‘g‘ri javob berdingiz." +
    (lost ? "" : " Benuqson natija!");
  const l = save();
  const tb = $("lb");
  tb.innerHTML = "";
  let mine = false;
  l.forEach((e, k) => {
    const tr = document.createElement("tr");
    if (!mine && e.n === name && e.s === score) {
      mine = true;
      tr.className = "me";
    }
    const a = document.createElement("td"),
      b = document.createElement("td");
    a.textContent = k + 1 + ". " + e.n;
    b.textContent = e.s;
    tr.append(a, b);
    tb.appendChild(tr);
  });
}
$("go").onclick = start;
["fn", "ln"].forEach((id) =>
  $(id).addEventListener("keydown", (e) => {
    if (e.key === "Enter") start();
  })
);
