const defaultRows = [{"month": "Jan", "id": 1, "name": "عمرو فاروق", "phone": "1066615900", "date": "2026-01-01", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "Jan", "id": 2, "name": "علي جمال", "phone": "1068405742", "date": "2026-01-02", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "Jan", "id": 3, "name": "محمد شوقي", "phone": "1000048487", "date": "2026-01-03", "comment": "unreachable", "source": "walk in", "sales": "Omar"}, {"month": "Jan", "id": 4, "name": "عصام الدين", "phone": "1111993325", "date": "2026-01-04", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "Jan", "id": 5, "name": "وليد دودار", "phone": "11110990059", "date": "2026-01-05", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "Jan", "id": 6, "name": "ايمان عبد الوهاب", "phone": "1224762018", "date": "2026-01-06", "comment": "not interested", "source": "walk in", "sales": "Omar"}, {"month": "Jan", "id": 7, "name": "عادل محمد", "phone": "1289404572", "date": "2026-01-07", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "Jan", "id": 8, "name": "اروه", "phone": "1064109405", "date": "2026-01-08", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "Jan", "id": 9, "name": "محمد هشام", "phone": "1061163478", "date": "2026-01-09", "comment": "not interested", "source": "walk in", "sales": "Omar"}, {"month": "Jan", "id": 10, "name": "هبه محمد", "phone": "1150011149", "date": "2026-01-10", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "Jan", "id": 11, "name": "اسامه سالم", "phone": "1003647502", "date": "2026-01-11", "comment": "inquiry", "source": "former client", "sales": "Kamal"}, {"month": "Jan", "id": 12, "name": "اسامه عبد الرحمن", "phone": "1008755592", "date": "2026-01-12", "comment": "not interested", "source": "walk in", "sales": "Omar"}, {"month": "Jan", "id": 13, "name": "صقر", "phone": "1005533365", "date": "2026-01-13", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "Jan", "id": 14, "name": "سالم", "phone": "1150207667", "date": "2026-01-14", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "Jan", "id": 15, "name": "فتحي سابق", "phone": "1067211870", "date": "2026-01-15", "comment": "unreachable", "source": "walk in", "sales": "Omar"}, {"month": "Jan", "id": 16, "name": "احمد خالد", "phone": "1554526984", "date": "2026-01-16", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "Jan", "id": 17, "name": "محمد ", "phone": "1110332308", "date": "2026-01-17", "comment": "inquiry", "source": "former client", "sales": "Kamal"}, {"month": "Jan", "id": 18, "name": "ياسر علي", "phone": "1025578080", "date": "2026-01-18", "comment": "not interested", "source": "walk in", "sales": "Omar"}, {"month": "Jan", "id": 19, "name": "فتحي محمد سيجد", "phone": "1004132196", "date": "2026-01-19", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "Jan", "id": 20, "name": "خالد سيد علي", "phone": "1000860231", "date": "2026-01-20", "comment": "inquiry", "source": "former client", "sales": "Kamal"}, {"month": "Jan", "id": 21, "name": "نهاد محمد", "phone": "1008782150", "date": "2026-01-21", "comment": "reservation", "source": "walk in", "sales": "Omar"}, {"month": "Jan", "id": 22, "name": "رمضان عبد المنعم يونس", "phone": "1029831020", "date": "2026-01-22", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "Jan", "id": 23, "name": "ريهام يحي", "phone": "1111712083", "date": "2026-01-23", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "Jan", "id": 24, "name": "محمد حسين", "phone": "1147554424", "date": "2026-01-24", "comment": "not interested", "source": "walk in", "sales": "Omar"}, {"month": "Jan", "id": 25, "name": "علي هشام", "phone": "1065482933", "date": "2026-01-25", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "February", "id": 1, "name": "محمود عامر", "phone": "1090025197", "date": "2026-02-01", "comment": "inquiry", "source": "facebook", "sales": "Kamal"}, {"month": "February", "id": 2, "name": "محمد القصير", "phone": "1000402548", "date": "2026-02-02", "comment": "not interested", "source": "walk in", "sales": "Omar"}, {"month": "February", "id": 3, "name": "حسنين محمد", "phone": "1225467132", "date": "2026-02-03", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "February", "id": 4, "name": "نريمان", "phone": "1090062300", "date": "2026-02-04", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "February", "id": 5, "name": "رحاب", "phone": "1031415393", "date": "2026-02-05", "comment": "unreachable", "source": "walk in", "sales": "Omar"}, {"month": "February", "id": 6, "name": "محمد سعيد", "phone": "1012201227", "date": "2026-02-06", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "February", "id": 7, "name": "محمد عمر", "phone": "1005285811", "date": "2026-02-07", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "February", "id": 8, "name": "مصطفي نور الدين", "phone": "1008566091", "date": "2026-02-08", "comment": "interested", "source": "walk in", "sales": "Omar"}, {"month": "February", "id": 9, "name": "محمد حمدي", "phone": "1006429335", "date": "2026-02-09", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "February", "id": 10, "name": "ابراهبم البكري", "phone": "1060959073", "date": "2026-02-10", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "February", "id": 11, "name": "مينا بدر", "phone": "1206109506", "date": "2026-02-11", "comment": "unreachable", "source": "walk in", "sales": "Omar"}, {"month": "February", "id": 12, "name": "احمد عادل", "phone": "1272788772", "date": "2026-02-12", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "February", "id": 13, "name": "مني عبد المعطي", "phone": "1227455906", "date": "2026-02-13", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "February", "id": 14, "name": "حنان الادهم", "phone": "1552350000", "date": "2026-02-14", "comment": "unreachable", "source": "walk in", "sales": "Omar"}, {"month": "February", "id": 15, "name": "مجدي سليم", "phone": "1066620320", "date": "2026-02-15", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "February", "id": 17, "name": "علي", "phone": "1111155520", "date": "2026-02-16", "comment": "inquiry", "source": "walk in", "sales": "Ahmed khaled"}, {"month": "February", "id": 18, "name": "محمد خالد", "phone": "1023395172", "date": "2026-02-17", "comment": "interested", "source": "walk in", "sales": "Omar"}, {"month": "February", "id": 19, "name": "علي نصير", "phone": "1151944595", "date": "2026-02-18", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "February", "id": 20, "name": "راشا محمد", "phone": "1554405352", "date": "2026-02-19", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "February", "id": 21, "name": "احمد سيد", "phone": "1141450851", "date": "2026-02-20", "comment": "unreachable", "source": "walk in", "sales": "Omar"}, {"month": "February", "id": 22, "name": "محمد ", "phone": "1116224383", "date": "2026-02-21", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "February", "id": 23, "name": "ناصر سليمان", "phone": "1066334348", "date": "2026-02-22", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "February", "id": 24, "name": "ايمان القط", "phone": "1067158693", "date": "2026-02-23", "comment": "not interested", "source": "walk in", "sales": "Omar"}, {"month": "February", "id": 25, "name": "ايمن سمير", "phone": "1000488224", "date": "2026-02-24", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "February", "id": 26, "name": "زيد", "phone": "1154847200", "date": "2026-02-25", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "February", "id": 27, "name": "حسن التركي", "phone": "1066356868", "date": "2026-02-26", "comment": "unreachable", "source": "walk in", "sales": "Omar"}, {"month": "February", "id": 28, "name": "وسيم وجدي", "phone": "1064747391", "date": "2026-02-27", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "February", "id": 29, "name": "عبد الله اسدايه", "phone": "1005271394", "date": "2026-02-28", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "February", "id": 30, "name": "احمد ابراهيم", "phone": "1559556092", "date": "2026-02-28", "comment": "not interested", "source": "walk in", "sales": "Omar"}, {"month": "February", "id": 31, "name": "ماهر فهيم", "phone": "1125555254", "date": "2026-02-28", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "February", "id": 32, "name": "احمد", "phone": "1558818304", "date": "2026-02-28", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "mar", "id": 1, "name": "محمد عبد الكريم", "phone": "1020964442", "date": "2026-03-01", "comment": "interested", "source": "walk in", "sales": "Omar"}, {"month": "mar", "id": 2, "name": "محمد", "phone": "1122277762", "date": "2026-03-02", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "mar", "id": 3, "name": "حسام", "phone": "1006373299", "date": "2026-03-03", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "mar", "id": 4, "name": "بلال", "phone": "1099509509", "date": "2026-03-04", "comment": "inquiry", "source": "walk in", "sales": "Omar"}, {"month": "mar", "id": 5, "name": "عمر", "phone": "1150231743", "date": "2026-03-05", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "mar", "id": 6, "name": "محمد عمر", "phone": "1005285811", "date": "2026-03-06", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "mar", "id": 7, "name": "احمد", "phone": "1012201227", "date": "2026-03-07", "comment": "unreachable", "source": "walk in", "sales": "Omar"}, {"month": "mar", "id": 8, "name": "محمد", "phone": "1208669555", "date": "2026-03-08", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "mar", "id": 9, "name": "احمد جمال", "phone": "1005180289", "date": "2026-03-09", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "mar", "id": 10, "name": "محمد", "phone": "966559785787", "date": "2026-03-10", "comment": "not interested", "source": "walk in", "sales": "Omar"}, {"month": "mar", "id": 11, "name": "محمد فوزي", "phone": "1010526946", "date": "2026-03-11", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "mar", "id": 12, "name": "نادر", "phone": "1005248607", "date": "2026-03-12", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "mar", "id": 13, "name": "شروق", "phone": "1022950792", "date": "2026-03-13", "comment": "unreachable", "source": "walk in", "sales": "Omar"}, {"month": "mar", "id": 14, "name": "محمد جمال", "phone": "1022836982", "date": "2026-03-14", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "mar", "id": 15, "name": "عاصم مخيمر", "phone": "1553447954", "date": "2026-03-15", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "mar", "id": 16, "name": "محمد اسماعيل", "phone": "1091109729", "date": "2026-03-16", "comment": "unreachable", "source": "walk in", "sales": "Omar"}, {"month": "mar", "id": 17, "name": "محمد عدلي", "phone": "1111163766", "date": "2026-03-17", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "mar", "id": 18, "name": "احمد الكاشف", "phone": "1000719400", "date": "2026-03-18", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "mar", "id": 19, "name": "عبد الله صقر", "phone": "1154933099", "date": "2026-03-19", "comment": "unreachable", "source": "walk in", "sales": "Omar"}, {"month": "mar", "id": 20, "name": "حسن", "phone": "1105917499", "date": "2026-03-20", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "mar", "id": 21, "name": "حسام حسني", "phone": "1284033336", "date": "2026-03-21", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "mar", "id": 22, "name": "عبد الحميد احمد ", "phone": "1115588170", "date": "2026-03-22", "comment": "interested", "source": "walk in", "sales": "Omar"}, {"month": "mar", "id": 23, "name": "نرمين", "phone": "1090062300", "date": "2026-03-23", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "mar", "id": 24, "name": "هبه", "phone": "1147554424", "date": "2026-03-24", "comment": "inquiry", "source": "walk in", "sales": "Kamal"}, {"month": "mar", "id": 25, "name": "مايسه", "phone": "1274877483", "date": "2026-03-25", "comment": "unreachable", "source": "walk in", "sales": "Omar"}, {"month": "mar", "id": 26, "name": "سمير عرفه", "phone": "1229197161", "date": "2026-03-26", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "mar", "id": 27, "name": "نور القارح", "phone": "1551706666", "date": "2026-03-27", "comment": "inquiry", "source": "walk in", "sales": "Ahmed khaled"}, {"month": "mar", "id": 28, "name": "محمد عادل", "phone": "1069637388", "date": "2026-03-28", "comment": "inquiry", "source": "walk in", "sales": "Ahmed khaled"}, {"month": "mar", "id": 29, "name": "نهاد ثابت عبد المعطي", "phone": "1095977227", "date": "2026-03-29", "comment": "Reservation", "source": "walk in", "sales": "kamal"}, {"month": "mar", "id": 30, "name": "امل عبد العزيز", "phone": "1066620320", "date": "2026-03-30", "comment": "Reservation", "source": "personal", "sales": "Ahmed khaled"}, {"month": "mar", "id": 31, "name": "بيومي علي بيومي", "phone": "1063852797", "date": "2026-03-30", "comment": "Reservation", "source": "personal", "sales": "Ahmed khaled"}, {"month": "mar", "id": 32, "name": "دنيا محمود", "phone": "1152000991", "date": "2026-03-30", "comment": "Reservation", "source": "walk in", "sales": "kamal"}, {"month": "mar", "id": 33, "name": "حسام الدين صلاح", "phone": "10011167011", "date": "2026-03-30", "comment": "Reservation", "source": "walk in", "sales": "kamal"}, {"month": "mar", "id": 34, "name": "مصطفي العدوي", "phone": "1067273744", "date": "2026-03-30", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "mar", "id": 35, "name": "ايهاب الازهري", "phone": "1223109346", "date": "2026-03-31", "comment": "interested", "source": "Call-Center", "sales": "kamal"}, {"month": "mar", "id": 36, "name": "محمد ممدوح", "phone": "1000276988", "date": "2026-03-31", "comment": "inquiry", "source": "facebook", "sales": "Ahmed khaled"}, {"month": "mar", "id": 37, "name": "اسلام محمد", "phone": "1014030466", "date": "2026-03-31", "comment": "interested", "source": "word of mouth", "sales": "omar"}, {"month": "mar", "id": 38, "name": "علاء السيد عبد الوهاب", "phone": "1208898412", "date": "2026-03-31", "comment": "Reservation", "source": "walk in", "sales": "omar"}, {"month": "mar", "id": 39, "name": "تمام علي حمادي", "phone": "1111155520", "date": "2026-03-31", "comment": "Reservation", "source": "personal", "sales": "Ahmed khaled"}, {"month": "mar", "id": 40, "name": "ناصر حسين احمد", "phone": "1111155520", "date": "2026-03-31", "comment": "Reservation", "source": "personal", "sales": "Ahmed khaled"}, {"month": "mar", "id": 41, "name": "رانيا صبحي", "phone": "1128412472", "date": "2026-03-31", "comment": "inquiry", "source": "walk in", "sales": "Sherif"}, {"month": "mar", "id": 42, "name": "منال عبدالقادر", "phone": "1020334245", "date": "2026-03-31", "comment": "Reservation", "source": "walk in", "sales": "Omar"}, {"month": "mar", "id": 43, "name": "عبير عبد القادر", "phone": "1111985390", "date": "2026-03-31", "comment": "Reservation", "source": "walk in", "sales": "Omar"}, {"month": "mar", "id": 44, "name": "احمد عاصم", "phone": "10151660090", "date": "2026-03-31", "comment": "inquiry", "source": "facebook", "sales": "Omar"}, {"month": "mar", "id": 45, "name": "احمد روشدي", "phone": "1116007835", "date": "2026-03-31", "comment": "inquiry", "source": "facebook", "sales": "Omar"}, {"month": "Apr", "id": 1, "name": "محمد ابراهيم ابو القاسم", "phone": "1155636299", "date": "2026-04-01", "comment": "inquiry", "source": "facebook", "sales": "omar"}, {"month": "Apr", "id": 2, "name": "رامي احمد هايل", "phone": "905527777740", "date": "2026-04-01", "comment": "Reservation", "source": "personal", "sales": "Ahmed khaled"}, {"month": "Apr", "id": 3, "name": "سيد ميصره", "phone": "1284463875", "date": "2026-04-01", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 4, "name": "محمد فتحي", "phone": "1091081800", "date": "2026-04-01", "comment": "interested", "source": "former client", "sales": "kamal"}, {"month": "Apr", "id": 5, "name": "محمود عبد الرحمن", "phone": "1203372000", "date": "2026-04-02", "comment": "inquiry", "source": "word of mouth", "sales": "kamal"}, {"month": "Apr", "id": 6, "name": "ساره عادل", "phone": "1010205695", "date": "2026-04-02", "comment": "interested", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 7, "name": "محمد عباس الحسيني", "phone": "1270882254", "date": "2026-04-02", "comment": "inquiry", "source": "tv", "sales": "kamal"}, {"month": "Apr", "id": 8, "name": "ابراهيم حافظ", "phone": "1001717930", "date": "2026-04-04", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 9, "name": "يحي محمود", "phone": "1117444927", "date": "2026-04-04", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 10, "name": "مي احمد", "phone": "1062368202", "date": "2026-04-04", "comment": "Reservation", "source": "personal", "sales": "Ahmed khaled"}, {"month": "Apr", "id": 11, "name": "محمد الاتربي", "phone": "1130782560", "date": "2026-04-04", "comment": "interested", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 12, "name": "هاني امين", "phone": "1153677720", "date": "2026-04-04", "comment": "interested", "source": "word of mouth", "sales": "omar"}, {"month": "Apr", "id": 13, "name": "عبدالرحمن محمد نجيب", "phone": "1008015560", "date": "2026-04-05", "comment": "inquiry", "source": "walk in", "sales": "kamal"}, {"month": "Apr", "id": 14, "name": "طارق سامي", "phone": "1017780369", "date": "2026-04-05", "comment": "inquiry", "source": "word of mouth", "sales": "omar"}, {"month": "Apr", "id": 15, "name": "ايه غريب", "phone": "1025832728", "date": "2026-04-05", "comment": "inquiry", "source": "tv", "sales": "shreif"}, {"month": "Apr", "id": 16, "name": "رحاب محمد", "phone": "1020795962", "date": "2026-04-05", "comment": "inquiry", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 17, "name": "شاهين شفيق", "phone": "1001276749", "date": "2026-04-05", "comment": "inquiry", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 18, "name": "محمد عبد السلام", "phone": "1024792912", "date": "2026-04-05", "comment": "inquiry", "source": "tv", "sales": "kamal"}, {"month": "Apr", "id": 19, "name": "اسلام يونس", "phone": "1008852750", "date": "2026-04-05", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 20, "name": "محمد عبد الخالق", "phone": "1103639892", "date": "2026-04-05", "comment": "inquiry", "source": "walk in", "sales": "kamal"}, {"month": "Apr", "id": 21, "name": "محمود عبد الكريم", "phone": "1015044915", "date": "2026-04-06", "comment": "inquiry", "source": "walk in", "sales": "kamal"}, {"month": "Apr", "id": 22, "name": "احمد جميل احمد سيف", "phone": "8618058482713", "date": "2026-04-06", "comment": "Reservation", "source": "personal", "sales": "Ahmed khaled"}, {"month": "Apr", "id": 23, "name": "وليد محمود", "phone": "1111157690", "date": "2026-04-06", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 24, "name": "علاء عبد الحميد", "phone": "1005714119", "date": "2026-04-06", "comment": "inquiry", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 25, "name": "رافت جرجس", "phone": "1211371773", "date": "2026-04-06", "comment": "Reservation", "source": "former client", "sales": "kamal"}, {"month": "Apr", "id": 26, "name": "وسام وجدي", "phone": "1064747391", "date": "2026-04-06", "comment": "inquiry", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 27, "name": "صابر مصطفي", "phone": "1223363258", "date": "2026-04-07", "comment": "inquiry", "source": "walk in", "sales": "kamal"}, {"month": "Apr", "id": 28, "name": "مصطفي شداد", "phone": "1022171815", "date": "2026-04-07", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 29, "name": "رشاد طارق", "phone": "1003004225", "date": "2026-04-07", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 30, "name": "مصطفي ابو زيد", "phone": "1033111139", "date": "2026-04-07", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 31, "name": "محمد طارق عبد المحسن", "phone": "1098886698", "date": "2026-04-07", "comment": "Reservation", "source": "personal", "sales": "Ahmed khaled"}, {"month": "Apr", "id": 32, "name": "محمد عبد المنعم", "phone": "1064555715", "date": "2026-04-08", "comment": "inquiry", "source": "walk in", "sales": "kamal"}, {"month": "Apr", "id": 33, "name": "سامح محمد", "phone": "1203436445", "date": "2026-04-08", "comment": "interested", "source": "word of mouth", "sales": "shreif"}, {"month": "Apr", "id": 34, "name": "عمرو شوقي", "phone": "1011306030", "date": "2026-04-08", "comment": "interested", "source": "word of mouth", "sales": "kamal"}, {"month": "Apr", "id": 35, "name": "محمد حمدي عبد القادر", "phone": "1005548867", "date": "2026-04-08", "comment": "interested", "source": "former client", "sales": "omar"}, {"month": "Apr", "id": 36, "name": "عبد الواحد شعلان", "phone": "966504337835", "date": "2026-04-08", "comment": "inquiry", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 37, "name": "امل محمد", "phone": "1005548867", "date": "2026-04-09", "comment": "Reservation", "source": "former client", "sales": "omar"}, {"month": "Apr", "id": 38, "name": "عبد الله عبد الفتاح", "phone": "1095295243", "date": "2026-04-09", "comment": "interested", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 39, "name": "امن ايوب", "phone": "1007359113", "date": "2026-04-09", "comment": "interested", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 40, "name": "علي عطيه", "phone": "1004227433", "date": "2026-04-09", "comment": "interested", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 41, "name": "حاتم محمد", "phone": "1111637070", "date": "2026-04-09", "comment": "inquiry", "source": "walk in", "sales": "kamal"}, {"month": "Apr", "id": 42, "name": "حسن عبد الرحمن", "phone": "1225737292", "date": "2026-04-09", "comment": "Reservation", "source": "word of mouth", "sales": "omar"}, {"month": "Apr", "id": 43, "name": "اخلاص محمد دفع الله", "phone": "1025711747", "date": "2026-04-09", "comment": "Reservation", "source": "walk in", "sales": "kamal"}, {"month": "Apr", "id": 44, "name": "حاتم غزال", "phone": "1201110318", "date": "2026-04-12", "comment": "interested", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 45, "name": "صلاح محمد", "phone": "1002517832", "date": "2026-04-12", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 46, "name": "احمد المشد", "phone": "1002726240", "date": "2026-04-14", "comment": "inquiry", "source": "call-center", "sales": "omar"}, {"month": "Apr", "id": 47, "name": "عبدالله سمير", "phone": "1013339733", "date": "2026-04-14", "comment": "inquiry", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 48, "name": "مؤمن ياسر", "phone": "1559551582", "date": "2026-04-14", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 49, "name": "محمد علي", "phone": "1000900079", "date": "2026-04-15", "comment": "interested", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 50, "name": "احمد فوزي", "phone": "1067031568", "date": "2026-04-15", "comment": "inquiry", "source": "word of mouth", "sales": "omar"}, {"month": "Apr", "id": 51, "name": "حاتم عبد العظيم", "phone": "1281696076", "date": "2026-04-15", "comment": "interested", "source": "word of mouth", "sales": "shreif"}, {"month": "Apr", "id": 52, "name": "محمد حامد", "phone": "1007701086", "date": "2026-04-16", "comment": "interested", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 53, "name": "محمد نجيب", "phone": "1117962222", "date": "2026-04-16", "comment": "interested", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 54, "name": "علي مكرم", "phone": "1007599081", "date": "2026-04-16", "comment": "interested", "source": "facebook", "sales": "Ahmed khaled"}, {"month": "Apr", "id": 55, "name": "عمار هشام", "phone": "1112910922", "date": "2026-04-16", "comment": "inquiry", "source": "word of mouth", "sales": "omar"}, {"month": "Apr", "id": 56, "name": "احمد فرج", "phone": "1001852167", "date": "2026-04-16", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 57, "name": "احمد محمود", "phone": "1111710744", "date": "2026-04-16", "comment": "inquiry", "source": "walk in", "sales": "Ahmed khaled"}, {"month": "Apr", "id": 58, "name": "احمد عماد", "phone": "1126799111", "date": "2026-04-18", "comment": "inquiry", "source": "word of mouth", "sales": "omar"}, {"month": "Apr", "id": 59, "name": "خالد عبد الحميد", "phone": "1558183152", "date": "2026-04-18", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 60, "name": "خالد محمد", "phone": "1000000462", "date": "2026-04-18", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 61, "name": "مصطفي محمد يونس", "phone": "1113670028", "date": "2026-04-18", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 62, "name": "رانا السيد", "phone": "1272227775", "date": "2026-04-19", "comment": "inquiry", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 63, "name": "محمد خالد", "phone": "1144723003", "date": "2026-04-19", "comment": "inquiry", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 64, "name": "قمر محمد", "phone": "1123201308", "date": "2026-04-19", "comment": "inquiry", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 65, "name": "يوسف امام", "phone": "1011150943", "date": "2026-04-19", "comment": "inquiry", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 66, "name": "محمد عطيه", "phone": "1558883118", "date": "2026-04-20", "comment": "inquiry", "source": "walk in", "sales": "kamal"}, {"month": "Apr", "id": 67, "name": "ايمان حمدي", "phone": "1007121668", "date": "2026-04-20", "comment": "interested", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 68, "name": "امين فهيم", "phone": "1000416491", "date": "2026-04-20", "comment": "inquiry", "source": "Google", "sales": "kamal"}, {"month": "Apr", "id": 69, "name": "رمضان حسن", "phone": "1126033147", "date": "2026-04-20", "comment": "interested", "source": "walk in", "sales": "Ahmed khaled"}, {"month": "Apr", "id": 70, "name": "مدام سعاد", "phone": "1275126317", "date": "2026-04-20", "comment": "interested", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 71, "name": "ايهاب السويفي", "phone": "1068188000", "date": "2026-04-21", "comment": "inquiry", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 72, "name": "ياسر عبد الرحمن", "phone": "1002820907", "date": "2026-04-22", "comment": "interested", "source": "walk in", "sales": "kamal"}, {"month": "Apr", "id": 73, "name": "صلاح الدين", "phone": "1096025908", "date": "2026-04-22", "comment": "inquiry", "source": "walk in", "sales": "kamal"}, {"month": "Apr", "id": 74, "name": "لبني محمد حسن", "phone": "1117308160", "date": "2026-04-22", "comment": "interested", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 75, "name": "احمد عماد  الدين", "phone": "1007738087", "date": "2026-04-22", "comment": "interested", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 76, "name": "عبده محمد", "phone": "1112228282", "date": "2026-04-22", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 77, "name": "علي عبد اللطيف", "phone": "1222168193", "date": "2026-04-23", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 78, "name": "احمد جمال", "phone": "1002899345", "date": "2026-04-23", "comment": "inquiry", "source": "word of mouth", "sales": "kamal"}, {"month": "Apr", "id": 79, "name": "مروة حسن", "phone": "1033967727", "date": "2026-04-25", "comment": "inquiry", "source": "walk in", "sales": "kamal"}, {"month": "Apr", "id": 80, "name": "شريف الصاوي", "phone": "1279930595", "date": "2026-04-25", "comment": "inquiry", "source": "walk in", "sales": "kamal"}, {"month": "Apr", "id": 81, "name": "خالد محمد", "phone": "1000477757", "date": "2026-04-26", "comment": "Reservation", "source": "former client", "sales": "kamal"}, {"month": "Apr", "id": 82, "name": "احمد عادل مصطفي", "phone": "1116080678", "date": "2026-04-26", "comment": "interested", "source": "walk in", "sales": "Ahmed khaled"}, {"month": "Apr", "id": 83, "name": "محمود شحاته", "phone": "1001843069", "date": "2026-04-26", "comment": "inquiry", "source": "walk in", "sales": "kamal"}, {"month": "Apr", "id": 84, "name": "علاء العطار", "phone": "1226896788", "date": "2026-04-26", "comment": "inquiry", "source": "facebook", "sales": "shreif"}, {"month": "Apr", "id": 85, "name": "هند عبد الناصر", "phone": "1014065349", "date": "2026-04-26", "comment": "inquiry", "source": "walk in", "sales": "kamal"}, {"month": "Apr", "id": 86, "name": "عمر طوسون", "phone": "1551059633", "date": "2026-04-26", "comment": "inquiry", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 87, "name": "يامنه علي", "phone": "1033590760", "date": "2026-04-26", "comment": "inquiry", "source": "former client", "sales": "kamal"}, {"month": "Apr", "id": 88, "name": "رحاب محمود", "phone": "1002106538", "date": "2026-04-26", "comment": "inquiry", "source": "walk in", "sales": "Ahmed khaled"}, {"month": "Apr", "id": 89, "name": "ايهاب ابو الغيط", "phone": "1229480097", "date": "2026-04-26", "comment": "inquiry", "source": "facebook", "sales": "omar"}, {"month": "Apr", "id": 90, "name": "عبد الرحمن صلاح", "phone": "1009825249", "date": "2026-04-26", "comment": "inquiry", "source": "facebook", "sales": "kamal"}, {"month": "Apr", "id": 91, "name": "يوسف راغب توفيق", "phone": "1222129422", "date": "2026-04-27", "comment": "Reservation", "source": "former client", "sales": "shreif"}, {"month": "Apr", "id": 92, "name": "امل محمد سامي", "phone": "1001508801", "date": "2026-04-27", "comment": "interested", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 93, "name": "حمدان حلمي الاغا", "phone": "1226999164", "date": "2026-04-27", "comment": "interested", "source": "walk in", "sales": "shreif"}, {"month": "Apr", "id": 94, "name": "احمد محمود", "phone": "1000097612", "date": "2026-04-28", "comment": "interested", "source": "walk in", "sales": "kamal"}, {"month": "Apr", "id": 95, "name": "احمد محمد المهدي", "phone": "1000990294", "date": "2026-04-28", "comment": "Reservation", "source": "former client", "sales": "omar"}, {"month": "Apr", "id": 96, "name": "بلال احمد", "phone": "1515242077", "date": "2026-04-28", "comment": "interested", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 97, "name": "عمرو فوزي", "phone": "1116522123", "date": "2026-04-29", "comment": "interested", "source": "walk in", "sales": "omar"}, {"month": "Apr", "id": 98, "name": "عمر احمد", "phone": "1154416559", "date": "2026-04-29", "comment": "interested", "source": "walk in", "sales": "Ahmed khaled"}];
let allRows = loadSavedRows() || defaultRows;
let currentLang = localStorage.getItem('takyiemLang') || 'en';


const GOOGLE_SHEET_ID = '1uMHr-dkSNXuvDJBjET0Su2IzNch5crUH';
const GOOGLE_SHEET_XLSX_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/export?format=xlsx`;
const GOOGLE_SHEET_CANDIDATE_SHEETS = ['Jan','January','February','Feb','mar','Mar','March','Apr','April','may','May','Jun','June','Jul','July','Aug','August','Sep','September','Oct','October','Nov','November','Dec','December'];
let googleSheetLiveMode = true;

function hasExpectedColumns(rows){
  if(!rows || !rows.length) return false;
  const keys = new Set(Object.keys(rows[0]).map(k => lower(k).replace(/\s+/g,'')));
  const expected = ['comment','status','inquiry/unreachable/...','inquiry/unreachable/…','howdidyouhearaboutus','source','dateofvisit','date','sales','thename','name','phonenumber','phone'];
  return expected.some(k => keys.has(k));
}
async function fetchGoogleWorkbook(){
  const response = await fetch(`${GOOGLE_SHEET_XLSX_URL}&cb=${Date.now()}`, { cache:'no-store' });
  if(!response.ok) throw new Error(`Google Sheet export failed: ${response.status}`);
  const buf = await response.arrayBuffer();
  return XLSX.read(buf, { type:'array', cellDates:true });
}
async function fetchGoogleSheetCsv(sheetName){
  const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}&cb=${Date.now()}`;
  const response = await fetch(url, { cache:'no-store' });
  if(!response.ok) throw new Error(`CSV sheet failed: ${sheetName}`);
  const text = await response.text();
  if(!text || text.trim().startsWith('<')) throw new Error(`CSV returned HTML: ${sheetName}`);
  const wb = XLSX.read(text, { type:'string', cellDates:true });
  const ws = wb.Sheets[wb.SheetNames[0]];
  const jsonRows = XLSX.utils.sheet_to_json(ws, { defval:'', raw:false });
  if(!hasExpectedColumns(jsonRows)) throw new Error(`Unexpected columns: ${sheetName}`);
  return normalizeUploadedRows(jsonRows, sheetName);
}
async function loadGoogleSheetLive(showMessage=true){
  const statusEl = byId('fileStatus');
  if(statusEl && showMessage) statusEl.textContent = t('Loading live Google Sheet...');
  try{
    const wb = await fetchGoogleWorkbook();
    const rows = rowsFromWorkbook(wb);
    if(!rows.length) throw new Error('No rows found in Google Sheet workbook');
    allRows = rows;
    googleSheetLiveMode = true;
    saveRows(allRows);
    refreshDashboard(`${t('Live Google Sheet loaded')} • ${fmt.format(allRows.length)} ${t('rows')} • ${new Set(allRows.map(r=>r.sheet)).size} ${t('sheets')}`);
    return true;
  }catch(xlsxError){
    console.warn('XLSX live load failed, trying CSV fallback', xlsxError);
    try{
      const fetched = await Promise.allSettled(GOOGLE_SHEET_CANDIDATE_SHEETS.map(fetchGoogleSheetCsv));
      const rows = fetched.flatMap(result => result.status === 'fulfilled' ? result.value : []);
      if(!rows.length) throw new Error('No rows found from CSV fallback');
      allRows = rows;
      googleSheetLiveMode = true;
      saveRows(allRows);
      refreshDashboard(`${t('Live Google Sheet loaded')} • ${fmt.format(allRows.length)} ${t('rows')} • ${new Set(allRows.map(r=>r.sheet)).size} ${t('sheets')}`);
      return true;
    }catch(csvError){
      console.error('Google Sheet live load failed', csvError);
      if(statusEl) statusEl.textContent = t('Could not load Google Sheet. Make sure it is shared publicly or published to web.');
      return false;
    }
  }
}

const fixedMetrics = { adminUnits: 8, contractsDone: 5, pendingUnits: 3, salesStart: '31 Mar 2026' };
const palette = { primary:'#277968', primaryDark:'#174e45', mint:'#70bea7', soft:'#eaf5f1', bg:'#f5f7f6', text:'#1f2a2a', muted:'#73807d', warn:'#d69e2e', danger:'#c05656', white:'#ffffff' };
const fmt = new Intl.NumberFormat('en-US');
const pct = (n) => `${Number(n || 0).toFixed(1)}%`;
const byId = (id) => document.getElementById(id);
function setText(id, value){ const el=byId(id); if(el) el.textContent=value; }
function norm(v){ return (v ?? '').toString().trim(); }
function lower(v){ return norm(v).toLowerCase(); }
function cleanKey(v){ return lower(v).replace(/[^a-z0-9؀-ۿ]+/g,''); }
const salesAliases = {
  'ahmedkhaled':'Ahmed Khaled', 'ahmedkhald':'Ahmed Khaled', 'احمدخالد':'Ahmed Khaled',
  'kamal':'Kamal', 'كمال':'Kamal',
  'omar':'Omar', 'عمر':'Omar',
  'sherif':'Sherif', 'shreif':'Sherif', 'شريف':'Sherif'
};
function canonicalSales(v){
  const raw = norm(v);
  if(!raw) return 'Unknown';
  return salesAliases[cleanKey(raw)] || raw.replace(/\s+/g,' ').replace(/\w/g,c=>c.toUpperCase());
}
function canonicalStatus(v){ return lower(v) || 'unknown'; }
const reservationStatuses = [
  'reservation',
  'reserved',
  'reservation confirmed g deposit',
  'reserved g contract signed',
  'reservation confirmed deposit',
  'reservation confirmed with deposit',
  'contract signed'
];
function cleanStatus(v){ return lower(v).replace(/\s+/g,' ').trim(); }
function isReservationStatus(v){
  const status = cleanStatus(v);
  if(!status) return false;
  return reservationStatuses.includes(status) ||
    status.includes('reservation') ||
    status.includes('reserved') ||
    status.includes('reserv') ||
    status.includes('deposit') ||
    status.includes('contract');
}
function isContractStatus(v){
  const status = cleanStatus(v);
  return status.includes('contract signed');
}
function isInterestedStatus(v){ return cleanStatus(v).includes('interested') && !cleanStatus(v).includes('not interested'); }
function isInquiryStatus(v){ return cleanStatus(v).includes('inquiry'); }
function canonicalSource(v){ return lower(v) || 'unknown'; }
function pad2(n){
  return String(n).padStart(2, '0');
}

function formatLocalDate(d){
  if(!(d instanceof Date) || isNaN(d)) return '';
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function parseExcelDate(v){
  if(v === null || v === undefined || v === '') return '';

  // لو التاريخ جاي من Excel كـ Date
  if(v instanceof Date && !isNaN(v)){
    return formatLocalDate(v);
  }

  // لو التاريخ جاي من Excel كرقم Serial
  if(typeof v === 'number'){
    const utcDays = Math.floor(v - 25569);
    const utcValue = utcDays * 86400 * 1000;
    const d = new Date(utcValue);
    return formatLocalDate(new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  }

  const s = String(v).trim();
  if(!s) return '';

  // صيغة ثابتة: 2026-05-13
  let m = s.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})/);
  if(m){
    const y = Number(m[1]);
    const mo = Number(m[2]);
    const da = Number(m[3]);
    return `${y}-${pad2(mo)}-${pad2(da)}`;
  }

  // صيغة Google Sheet غالبًا: 05-13-2026 = MM-DD-YYYY
  m = s.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})/);
  if(m){
    let a = Number(m[1]);
    let b = Number(m[2]);
    const y = Number(m[3]);

    let mo, da;

    // لو أول رقم أكبر من 12 يبقى ده اليوم: DD-MM-YYYY
    if(a > 12){
      da = a;
      mo = b;
    }else{
      // غير كده اعتبرها MM-DD-YYYY لأن Google Sheet عندك ظاهر كده
      mo = a;
      da = b;
    }

    return `${y}-${pad2(mo)}-${pad2(da)}`;
  }

  const d = new Date(s);
  if(!isNaN(d)){
    return formatLocalDate(d);
  }

  return s.slice(0, 10);
}
function loadSavedRows(){ try{ return JSON.parse(localStorage.getItem('takyiemRows') || 'null'); }catch(e){ return null; } }
function saveRows(rows){ localStorage.setItem('takyiemRows', JSON.stringify(rows)); }
function valueFrom(obj, keys){
  const map={}; Object.keys(obj).forEach(k=>map[lower(k).replace(/\s+/g,'')]=obj[k]);
  for(const k of keys){ const v=map[k.toLowerCase().replace(/\s+/g,'')]; if(v!==undefined && v!==null && norm(v)!=='') return v; }
  return '';
}
function normalizeUploadedRows(jsonRows, sheetName=''){
  return jsonRows.map((r,i)=>({
    sheet: norm(sheetName) || 'Sheet',
    month: norm(valueFrom(r,['month','m','الشهر'])) || monthName(parseExcelDate(valueFrom(r,['date of visit','date','visit date','التاريخ']))) || norm(sheetName),
    id: norm(valueFrom(r,['id','m','no','number'])) || i+1,
    name: norm(valueFrom(r,['the name','name','customer name','الاسم'])) || '-',
    phone: norm(valueFrom(r,['phone number','phone','mobile','رقم الهاتف'])) || '-',
    date: parseExcelDate(valueFrom(r,['date of visit','date','visit date','التاريخ'])),
    comment: canonicalStatus(valueFrom(r,['comment','status','notes','inquiry / unreachable / …','inquiry / unreachable / ...','inquiry/unreachable','reservation','الحالة','التعليق'])),
    source: canonicalSource(valueFrom(r,['how did you hear about us','source','lead source','source (walk in / ...)','source (walk in / …)','المصدر','مصدر العميل'])),
    sales: canonicalSales(valueFrom(r,['sales','sales / owner','owner','admin','employee','sales (اسم الموظف)','اسم الموظف','الموظف','المسؤول']))
  })).filter(r=>r.name !== '-' || r.phone !== '-' || r.date);
}
function monthName(dateStr){
  const d=new Date(dateStr); if(isNaN(d)) return 'Unknown';
  return d.toLocaleString('en-US',{month:'short'});
}
function groupCount(rows, key){
  const out={};
  rows.forEach(r=>{
    let k = norm(r[key]) || 'Unknown';
    if(key === 'sales') k = canonicalSales(k);
    if(key === 'comment') k = canonicalStatus(k);
    if(key === 'source') k = canonicalSource(k);
    out[k]=(out[k]||0)+1;
  });
  return out;
}
function topEntry(obj){
  return Object.entries(obj || {}).sort((a,b)=>b[1]-a[1])[0] || ['-',0];
}
function percentOf(value,total){ return pct(((Number(value)||0)/(total||1))*100); }
function getFilters(){ return { month:byId('filterMonth')?.value||'', sheet:byId('filterSheet')?.value||'', sales:byId('filterSales')?.value||'', status:byId('filterStatus')?.value||'', source:byId('filterSource')?.value||'', from:byId('filterFrom')?.value||'', to:byId('filterTo')?.value||'', search:lower(byId('filterSearch')?.value||'') }; }
function dateToLocalMidnight(dateStr){
  if(!dateStr) return null;

  const clean = parseExcelDate(dateStr);
  const parts = clean.split('-');

  if(parts.length !== 3) return null;

  const y = Number(parts[0]);
  const m = Number(parts[1]);
  const d = Number(parts[2]);

  if(!y || !m || !d) return null;

  const out = new Date(y, m - 1, d);
  out.setHours(0, 0, 0, 0);
  return out;
}

function filteredRows(){
  const f = getFilters();

  const fromDate = f.from ? dateToLocalMidnight(f.from) : null;
  const toDate = f.to ? dateToLocalMidnight(f.to) : null;

  if(toDate){
    toDate.setHours(23, 59, 59, 999);
  }

  return allRows.filter(r => {

    if(f.month && norm(r.month) !== f.month) return false;
    if(f.sheet && norm(r.sheet) !== f.sheet) return false;
    if(f.sales && canonicalSales(r.sales) !== f.sales) return false;
    if(f.status && canonicalStatus(r.comment) !== f.status) return false;
    if(f.source && canonicalSource(r.source) !== f.source) return false;

    const rowDate = dateToLocalMidnight(r.date);

    if(fromDate && (!rowDate || rowDate < fromDate)) return false;
    if(toDate && (!rowDate || rowDate > toDate)) return false;

    if(
      f.search &&
      !(
        lower(r.name).includes(f.search) ||
        lower(r.phone).includes(f.search)
      )
    ) return false;

    return true;
  });
}
function calculate(){
  const rows=filteredRows();
  const total=rows.length;
  const status=groupCount(rows,'comment'), source=groupCount(rows,'source'), sales=groupCount(rows,'sales'), monthly=groupCount(rows,'month');
  const dailyObj=groupCount(rows,'date');
  const daily=Object.entries(dailyObj).filter(([d])=>d).sort((a,b)=>a[0].localeCompare(b[0])).map(([date,count])=>({date,count}));
  const inquiry=Object.entries(status).filter(([k])=>lower(k).includes('inquiry')).reduce((a,[,v])=>a+v,0);
  const unreachable=Object.entries(status).filter(([k])=>lower(k).includes('unreachable')).reduce((a,[,v])=>a+v,0);
  const reservation=rows.filter(r=>isReservationStatus(r.comment)).length;
  const topSales=Object.entries(sales).sort((a,b)=>b[1]-a[1])[0]||['-',0];
  const monthOrder={Jan:1,January:1,Feb:2,February:2,mar:3,Mar:3,March:3,Apr:4,April:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12,Unknown:99};
  return { rows, total, status, source, sales, daily, monthly:Object.entries(monthly).map(([month,count])=>({month,count})).sort((a,b)=>(monthOrder[a.month]||50)-(monthOrder[b.month]||50)), inquiry, unreachable, reservation, topSales };
}
function selectedFixedMetrics(){
  const f=getFilters();
  // The fixed contract note belongs to Ahmed Khaled Administration.
  // When another Sales/Owner is selected, these executive fixed KPIs become 0 so the dashboard reflects only the selected owner.
  if(f.sales && f.sales !== 'Ahmed Khaled') return {adminUnits:0, contractsDone:0, pendingUnits:0};
  return fixedMetrics;
}
const weekDaysOrdered = [
  { key: 6, ar: 'السبت', en: 'Saturday' },
  { key: 0, ar: 'الأحد', en: 'Sunday' },
  { key: 1, ar: 'الاثنين', en: 'Monday' },
  { key: 2, ar: 'الثلاثاء', en: 'Tuesday' },
  { key: 3, ar: 'الأربعاء', en: 'Wednesday' },
  { key: 4, ar: 'الخميس', en: 'Thursday' },
  { key: 5, ar: 'الجمعة', en: 'Friday' }
];

function monthSortKey(monthKey){
  const d = new Date(monthKey + ' 01');
  if(!isNaN(d)) return d.getFullYear() * 100 + d.getMonth();
  return 999999;
}

function getMonthLabelFromDate(dateStr){
  const d = dateToLocalMidnight(dateStr);
  if(!d) return 'Unknown';

  return d.toLocaleString('en-US', {
    month: 'short',
    year: 'numeric'
  });
}

function getWeeklyPeakData(rows){
  const grouped = {};

  rows.forEach(r => {
    const d = dateToLocalMidnight(r.date);
    if(!d) return;

    const monthKey = getMonthLabelFromDate(r.date);
    const dayIndex = d.getDay();

    if(!grouped[monthKey]){
      grouped[monthKey] = {
        month: monthKey,
        total: 0,
        days: {}
      };

      weekDaysOrdered.forEach(day => {
        grouped[monthKey].days[day.en] = 0;
      });
    }

    const foundDay = weekDaysOrdered.find(day => day.key === dayIndex);
    if(!foundDay) return;

    grouped[monthKey].days[foundDay.en] += 1;
    grouped[monthKey].total += 1;
  });

  return Object.values(grouped).map(row => {
    let peakDay = '-';
    let peakDayAr = '-';
    let peakCount = 0;

    weekDaysOrdered.forEach(day => {
      const count = row.days[day.en] || 0;
      if(count > peakCount){
        peakDay = day.en;
        peakDayAr = day.ar;
        peakCount = count;
      }
    });

    return {
      ...row,
      peakDay,
      peakDayAr,
      peakCount
    };
  }).sort((a,b) => monthSortKey(a.month) - monthSortKey(b.month));
}

function renderWeeklyPeakAnalysis(){
  const bestEl = byId('weeklyPeakBest');
  const cardsEl = byId('weeklyPeakCards');
  const tableEl = byId('weeklyPeakTable');

  if(!bestEl || !cardsEl || !tableEl) return;

  const rows = filteredRows();
  const data = getWeeklyPeakData(rows);

  if(!data.length){
    bestEl.textContent = 'No data';
    cardsEl.innerHTML = `<div class="empty-state">لا توجد بيانات حسب الفلتر الحالي</div>`;
    tableEl.innerHTML = '';
    return;
  }

  const globalDays = {};
  weekDaysOrdered.forEach(day => globalDays[day.en] = 0);

  data.forEach(month => {
    weekDaysOrdered.forEach(day => {
      globalDays[day.en] += month.days[day.en] || 0;
    });
  });

  let globalPeak = weekDaysOrdered[0];
  let globalPeakCount = 0;

  weekDaysOrdered.forEach(day => {
    if(globalDays[day.en] > globalPeakCount){
      globalPeak = day;
      globalPeakCount = globalDays[day.en];
    }
  });

  bestEl.innerHTML = `
    <div style="font-size:12px;opacity:.8">Overall Peak Day</div>
    <div style="font-size:24px;margin-top:4px">${globalPeak.en}</div>
    <div style="font-size:13px;margin-top:4px">${globalPeak.ar} • ${fmt.format(globalPeakCount)} records</div>
  `;

  cardsEl.innerHTML = data.map(month => {
    const max = Math.max(...weekDaysOrdered.map(day => month.days[day.en] || 0), 1);

    return `
      <div class="weekly-card">
        <div class="month">${month.month}</div>
        <div class="peak">${month.peakDay}</div>
        <div class="sub">${month.peakDayAr} • ${fmt.format(month.peakCount)} من ${fmt.format(month.total)}</div>

        <div class="week-bars">
          ${weekDaysOrdered.map(day => {
            const value = month.days[day.en] || 0;
            const width = Math.round((value / max) * 100);

            return `
              <div class="week-bar-row">
                <span>${day.en}</span>
                <div class="week-bar-track">
                  <div class="week-bar-fill" style="width:${width}%"></div>
                </div>
                <span>${fmt.format(value)}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  tableEl.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Month</th>
          ${weekDaysOrdered.map(day => `<th>${day.en}</th>`).join('')}
          <th>Peak Day</th>
          <th>Peak Count</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(month => `
          <tr>
            <td>${month.month}</td>
            ${weekDaysOrdered.map(day => `<td>${fmt.format(month.days[day.en] || 0)}</td>`).join('')}
            <td class="peak-cell">${month.peakDay}</td>
            <td class="peak-cell">${fmt.format(month.peakCount)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}
function initKPIs(){
  const m=calculate();
  const fx=selectedFixedMetrics();
  setText('totalCustomers', fmt.format(m.total));
  setText('adminUnits', fmt.format(fx.adminUnits));
  setText('contractsDone', fmt.format(fx.contractsDone));
  setText('pendingUnits', fmt.format(fx.pendingUnits));
  setText('conversionRate', pct(fx.adminUnits ? (fx.contractsDone/fx.adminUnits)*100 : 0));
  setText('reservationCount', fmt.format(m.reservation));
  setText('reservationRate', pct((m.reservation/(m.total||1))*100));
  setText('inquiryRate', pct((m.inquiry/(m.total||1))*100));
  setText('unreachableRate', pct((m.unreachable/(m.total||1))*100));
  setText('salesStart', fixedMetrics.salesStart);
  setText('topSales', `${m.topSales[0]} (${m.topSales[1]})`);
  const tsrc = topEntry(m.source);
  const tstat = topEntry(m.status);
  setText('topSource', `${tsrc[0]} • ${fmt.format(tsrc[1])} • ${percentOf(tsrc[1], m.total)}`);
  setText('topStatus', `${tstat[0]} • ${fmt.format(tstat[1])} • ${percentOf(tstat[1], m.total)}`);
}
function updateExecutiveInsights(m){
  const tsrc = topEntry(m.source);
  const tstat = topEntry(m.status);
  setText('topStatusInsight', `${tstat[0]} • ${fmt.format(tstat[1])} • ${percentOf(tstat[1], m.total)}`);
  setText('topSourceInsight', `${tsrc[0]} • ${fmt.format(tsrc[1])} • ${percentOf(tsrc[1], m.total)}`);
  setText('topStatusInsightSub', t('Highest status by count and percentage.'));
  setText('topSourceInsightSub', t('Highest source by count and percentage.'));
  let focus = t('Follow conversion and lead quality');
  let sub = t('Review high-volume statuses and sources to improve closing rate.');
  if(lower(tstat[0]).includes('unreachable')){ focus = t('Reduce unreachable leads'); sub = t('Check phone quality, call timing and follow-up process.'); }
  else if(lower(tstat[0]).includes('reservation')){ focus = t('Scale reservation sources'); sub = t('Prioritize channels and sales behaviors driving reservations.'); }
  else if(lower(tstat[0]).includes('inquiry')){ focus = t('Convert inquiries to reservations'); sub = t('Use follow-up actions to move inquiry leads into interested and reservation stages.'); }
  setText('executiveFocusInsight', focus);
  setText('executiveFocusSub', sub);
}
function updateAdminKpiNote(){
  const note=byId('adminKpiNote');
  const noteText=byId('adminKpiNoteText');
  if(!note) return;
  const selectedSales=getFilters().sales;
  const shouldShow=!selectedSales || selectedSales==='Ahmed Khaled';
  note.classList.toggle('hidden', !shouldShow);
  if(noteText){
    noteText.textContent=t('Important note: Admin Units Initiated, Contracts Finalized, Pending Units and Conversion Rate are related to Ahmed Khaled (Administration) only.');
  }
}
function escapeHtml(s){ return norm(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function barChart(elId,data,labelKey,valueKey,options={}){
  const el=byId(elId); if(!el) return; const max=Math.max(...data.map(d=>d[valueKey]),1);
  const total = options.total || data.reduce((a,d)=>a+(Number(d[valueKey])||0),0) || 1;
  const rowClass = options.showPercent ? 'bar-row percent-row' : 'bar-row';
  el.innerHTML=data.map(d=>{
    const value = Number(d[valueKey]) || 0;
    const percent = pct((value/total)*100);
    const shownValue = options.showPercent ? `${fmt.format(value)} • ${percent}` : fmt.format(value);
    return `<div class="${rowClass}"><div class="bar-label" title="${escapeHtml(d[labelKey])}">${escapeHtml(d[labelKey])}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.max(3,(value/max)*100)}%; background:${options.color||palette.primary}"></div></div><div class="bar-value">${shownValue}</div></div>`;
  }).join('') || `<div class="empty-state">${t('No data for selected filters')}</div>`;
}
function columnChart(elId,data,labelKey,valueKey){
 const el=byId(elId); if(!el) return; const max=Math.max(...data.map(d=>d[valueKey]),1);
 el.innerHTML=`<div class="columns">${data.map(d=>`<div class="col-wrap"><div class="col-value">${d[valueKey]}</div><div class="col" style="height:${Math.max(4,(d[valueKey]/max)*100)}%"></div><div class="col-label">${escapeHtml(d[labelKey])}</div></div>`).join('')}</div>`;
}
function donutChart(elId,data){
 const el=byId(elId); if(!el) return; const total=data.reduce((a,d)=>a+d.value,0)||1; let acc=0; const colors=[palette.primary,palette.mint,palette.warn,'#90a4ae',palette.danger,'#8db6a7','#b0bec5','#d4a373'];
 const segments=data.map((d,i)=>{ const start=acc/total*100; acc+=d.value; const end=acc/total*100; return `${colors[i%colors.length]} ${start}% ${end}%`; }).join(', ');
 el.innerHTML=`<div class="donut" style="background:conic-gradient(${segments});"><div><strong>${total}</strong><span>${t('Total')}</span></div></div><div class="legend">${data.map((d,i)=>`<div><span style="background:${colors[i%colors.length]}"></span>${escapeHtml(d.label)} <b>${fmt.format(d.value)} • ${pct((d.value/total)*100)}</b></div>`).join('')}</div>`;
}
function lineChart(elId,data){
 const el=byId(elId); if(!el) return; if(!data.length){ el.innerHTML=`<div class="empty-state">${t('No data for selected filters')}</div>`; return; }
 const w=920,h=260,pad=34,max=Math.max(...data.map(d=>d.count),1);
 const points=data.map((d,i)=>{ const x=pad+(i/(data.length-1||1))*(w-pad*2); const y=h-pad-(d.count/max)*(h-pad*2); return [x,y,d]; });
 const path=points.map((p,i)=>`${i?'L':'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' '); const area=`${path} L${w-pad} ${h-pad} L${pad} ${h-pad} Z`;
 const markers=points.filter((_,i)=>i%Math.ceil(points.length/12)===0||i===points.length-1).map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="4"><title>${p[2].date}: ${p[2].count}</title></circle>`).join('');
 const idx=Math.max(0,points.findIndex(p=>p[2].date>='2026-03-31')); const ax=pad+(idx/(points.length-1||1))*(w-pad*2);
 el.innerHTML=`<svg viewBox="0 0 ${w} ${h}" class="line-svg" preserveAspectRatio="none"><line x1="${pad}" y1="${h-pad}" x2="${w-pad}" y2="${h-pad}" class="axis"/><line x1="${pad}" y1="${pad}" x2="${pad}" y2="${h-pad}" class="axis"/><path d="${area}" class="area"/><path d="${path}" class="line"/>${markers}<line x1="${ax}" y1="${pad}" x2="${ax}" y2="${h-pad}" class="activation"/><text x="${ax+8}" y="${pad+18}" class="activation-text">${t('Sales activation')}</text></svg>`;
}

function getFunnelData(rows){
  const total = rows.length || 1;
  const stages = [
    { key:'inquiry', label:t('Inquiry'), count: rows.filter(r=>isInquiryStatus(r.comment)).length },
    { key:'interested', label:t('Interested'), count: rows.filter(r=>isInterestedStatus(r.comment)).length },
    { key:'reserved', label:t('Reserved / Closed'), count: rows.filter(r=>isReservationStatus(r.comment)).length },
    { key:'contract', label:t('Contract Signed'), count: rows.filter(r=>isContractStatus(r.comment)).length }
  ];
  return stages.map((stage, i)=>{
    const prev = i === 0 ? total : stages[i-1].count;
    return {
      ...stage,
      percentTotal: (stage.count / total) * 100,
      conversionFromPrevious: prev ? (stage.count / prev) * 100 : 0
    };
  });
}
function renderFunnel(){
  const el = byId('conversionFunnel');
  if(!el) return;
  const rows = filteredRows();
  const data = getFunnelData(rows);
  const max = Math.max(...data.map(d=>d.count), 1);
  el.innerHTML = data.map((d, i)=>{
    const width = Math.max(8, (d.count / max) * 100);
    const prevText = i === 0 ? t('of total leads') : t('from previous stage');
    return `<div class="funnel-stage">
      <div class="funnel-head">
        <strong>${escapeHtml(d.label)}</strong>
        <span>${fmt.format(d.count)} • ${pct(d.percentTotal)}</span>
      </div>
      <div class="funnel-track"><div class="funnel-fill" style="width:${width}%"></div></div>
      <div class="funnel-meta">${pct(d.conversionFromPrevious)} ${escapeHtml(prevText)}</div>
    </div>`;
  }).join('') || `<div class="empty-state">${t('No data for selected filters')}</div>`;
}
function renderTables(){
 const m=calculate(); initKPIs(); updateAdminKpiNote();
 const statusChartData = Object.entries(m.status).map(([label,value])=>({label,value})).sort((a,b)=>b.value-a.value);
 donutChart('statusDonut', statusChartData);
 barChart('statusBars', statusChartData.map(d=>({status:d.label,count:d.value})),'status','count',{showPercent:true,total:m.total,color:palette.primaryDark});
 const sourceChartData = Object.entries(m.source).map(([label,value])=>({label,value})).sort((a,b)=>b.value-a.value);
 donutChart('sourceDonut', sourceChartData);
 barChart('sourceBars', sourceChartData.map(d=>({source:d.label,count:d.value})),'source','count',{showPercent:true,total:m.total});
 updateExecutiveInsights(m);
 renderFunnel();
 barChart('salesBars', Object.entries(m.sales).map(([sales,count])=>({sales,count})).sort((a,b)=>b.count-a.count).slice(0,8),'sales','count',{color:palette.mint});
 columnChart('monthColumns', m.monthly,'month','count');
 lineChart('dailyLine', m.daily);
 const fx=selectedFixedMetrics();
 barChart('beforeAfter',[{period:t('Jan–30 Mar: selling inactive'),count:0},{period:t('From 31 Mar onward: active pipeline'),count:fx.contractsDone}],'period','count',{color:palette.primaryDark});
}
function populateFilters(){
 const configs=[['filterMonth','month'],['filterSheet','sheet'],['filterSales','sales'],['filterStatus','comment'],['filterSource','source']];
 configs.forEach(([id,key])=>{
  const el=byId(id); if(!el) return; const current=el.value;
  const values=[...new Set(allRows.map(r=>{
    if(key==='sales') return canonicalSales(r[key]);
    if(key==='comment') return canonicalStatus(r[key]);
    if(key==='source') return canonicalSource(r[key]);
    return norm(r[key]);
  }).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
  el.innerHTML=`<option value="">${t('All')}</option>`+values.map(v=>`<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join('');
  el.value=values.includes(current)?current:'';
});
}
function clearFilters(){ ['filterMonth','filterSheet','filterSales','filterStatus','filterSource','filterFrom','filterTo','filterSearch'].forEach(id=>{ const el=byId(id); if(el) el.value=''; }); renderTables(); }
function initFilters(){
 populateFilters(); ['filterMonth','filterSheet','filterSales','filterStatus','filterSource','filterFrom','filterTo','filterSearch'].forEach(id=>{ const el=byId(id); if(el) el.addEventListener('input', renderTables); });
 byId('clearFilters')?.addEventListener('click', clearFilters);
}
function rowsFromWorkbook(wb){
  let all = [];
  wb.SheetNames.forEach(sheetName => {
    const ws = wb.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(ws, {defval:'', raw:false});
    all = all.concat(normalizeUploadedRows(rows, sheetName));
  });
  return all;
}
async function readFileRows(file){
  const ext=file.name.split('.').pop().toLowerCase();
  if(ext==='csv'){
    const text=await file.text();
    const wb=XLSX.read(text,{type:'string', cellDates:true});
    return rowsFromWorkbook(wb);
  }
  const buf=await file.arrayBuffer();
  const wb=XLSX.read(buf,{type:'array', cellDates:true});
  return rowsFromWorkbook(wb);
}
function refreshDashboard(message){
  populateFilters();
  renderTables();
  renderWeeklyPeakAnalysis();

  const status=byId('fileStatus');
  if(status && message) status.textContent=message;
}
function initUpload(){
 const fileInput=byId('fileInput'), status=byId('fileStatus');
 const saved=loadSavedRows();
 if(saved){
   allRows=saved.map(r=>({...r, sales:canonicalSales(r.sales), comment:canonicalStatus(r.comment), source:canonicalSource(r.source), sheet:r.sheet||r.month||'Sheet'}));
   if(status) status.textContent=t('Saved data loaded. Press Refresh Google Sheet to update live data.');
 }
 async function loadSelectedFile(){
  const file=fileInput?.files?.[0];
  if(!file){ await loadGoogleSheetLive(true); return; }
  try{
    const rows=await readFileRows(file);
    allRows=rows;
    googleSheetLiveMode = false;
    saveRows(allRows);
    refreshDashboard(`${t('Loaded')}: ${file.name} (${allRows.length} ${t('rows')}, ${new Set(allRows.map(r=>r.sheet)).size} ${t('sheets')})`);
  }catch(err){ console.error(err); if(status) status.textContent=t('Could not read this file. Please use Excel or CSV.'); }
 }
 fileInput?.addEventListener('change', loadSelectedFile);
 byId('refreshData')?.addEventListener('click', async()=>{ await loadGoogleSheetLive(true); });
 byId('resetData')?.addEventListener('click', async()=>{ localStorage.removeItem('takyiemRows'); const ok=await loadGoogleSheetLive(true); if(!ok){ allRows=defaultRows.map(r=>({...r, sheet:r.month||'Sample', sales: canonicalSales(r.sales), comment: canonicalStatus(r.comment), source: canonicalSource(r.source)})); refreshDashboard(t('Sample data restored')); } });
 // Load the linked Google Sheet automatically when opening from GitHub or locally.
 loadGoogleSheetLive(false).then(ok=>{ if(!ok && !saved){ refreshDashboard(t('Sample data restored')); } });
}
const translations={ ar: {
 'Customer Service & Sales Performance':'أداء خدمة العملاء والمبيعات','Executive Dashboard • Q1 / Sales Activation 2026':'لوحة تنفيذية • الربع الأول / تفعيل البيع 2026','Power BI-style HTML Dashboard':'داشبورد HTML بأسلوب Power BI','Executive Summary':'الملخص التنفيذي','Sales started late, but early conversion is strong.':'بدأ البيع متأخرًا، لكن نسبة التحويل الأولية قوية.','January, February and March had inactive selling activity. Starting 31 March, the sales pipeline became active, with 5 finalized contracts from 8 administration-initiated units.':'خلال يناير وفبراير ومارس كان نشاط البيع متوقفًا. بداية من 31 مارس بدأ تفعيل مسار البيع، وتم إنهاء 5 عقود من أصل 8 وحدات تم إنشاؤها إداريًا.','Important New Note':'ملاحظة جديدة مهمة','Ahmed Khaled • Administration':'أحمد خالد • الإدارة','Important note: Admin Units Initiated, Contracts Finalized, Pending Units and Conversion Rate are related to Ahmed Khaled (Administration) only.':'ملحوظة مهمة: مؤشرات الوحدات المنشأة إداريًا، العقود النهائية، الوحدات المتبقية ونسبة التحويل خاصة بالموظف أحمد خالد (Administration) فقط.','Total Customer Records':'إجمالي سجلات العملاء','All loaded months':'كل الشهور المحملة','Admin Units Initiated':'الوحدات المنشأة إداريًا','Ahmed Khaled':'أحمد خالد','Contracts Finalized':'العقود النهائية','From initiated units':'من الوحدات المنشأة','Pending Units':'الوحدات المتبقية','Still in progress':'ما زالت قيد المتابعة','Conversion Rate':'نسبة التحويل','Contracts / initiated units':'العقود / الوحدات المنشأة','Reservation Count':'عدد الحجوزات','Closed units from Comment':'الوحدات المقفولة من عمود الحالة','Reservation Rate':'نسبة الحجز','Reservations / total leads':'الحجوزات / إجمالي العملاء','Inquiry Rate':'نسبة الاستفسارات','Customer service quality indicator':'مؤشر جودة خدمة العملاء','Unreachable Rate':'نسبة غير متاح','Follow-up risk':'مخاطر المتابعة','Sales Start Date':'تاريخ بداية البيع','Activation point':'نقطة التفعيل','Top Sales Activity':'أعلى نشاط مبيعات','By customer records':'حسب سجلات العملاء','Management Message':'رسالة للإدارة','Q2 Potential':'فرصة الربع الثاني','3 pending units to follow':'متابعة 3 وحدات متبقية','Daily Customer Activity Timeline':'الخط الزمني اليومي لنشاط العملاء','Shows activity trend with the sales activation marker at 31 March.':'يوضح اتجاه النشاط مع علامة تفعيل البيع يوم 31 مارس.','Status Distribution':'توزيع الحالات','Inquiry, interested, reservation, unreachable and other statuses.':'استفسار، مهتم، حجز، غير متاح وحالات أخرى.','Monthly Volume':'الحجم الشهري','Customer service volume by month.':'حجم خدمة العملاء حسب الشهر.','Lead Source Analysis':'تحليل مصادر العملاء','Where customers came from.':'مصادر وصول العملاء.','Counts and percentages for every value in the Comment / Status column.':'العدد والنسبة لكل قيمة في عمود الحالة / التعليق.','Counts and percentages for every value in the Source column.':'العدد والنسبة لكل قيمة في عمود المصدر.','Sales Team Activity':'نشاط فريق المبيعات','Customer records handled by each sales/admin owner.':'سجلات العملاء التي تعامل معها كل مسؤول مبيعات/إدارة.','Before vs After 31 March':'قبل وبعد 31 مارس','Management view: inactive selling phase vs active sales phase.':'رؤية الإدارة: مرحلة توقف البيع مقابل مرحلة تفعيل البيع.','Executive Interpretation':'التفسير التنفيذي','Decision-ready points for management.':'نقاط جاهزة لاتخاذ القرار للإدارة.','Created by Ahmed Khaled':'تم الإنشاء بواسطة أحمد خالد','Core Message':'الرسالة الأساسية','Late Start':'بداية متأخرة','Conversion':'التحويل','Contracts':'العقود','5 of 8':'5 من 8','Next Focus':'التركيز القادم','Close 3 Pending':'إغلاق 3 متبقية','Total':'الإجمالي','Sales activation':'تفعيل البيع','Jan–30 Mar: selling inactive':'يناير–30 مارس: البيع متوقف','From 31 Mar onward: active pipeline':'من 31 مارس: مسار البيع نشط','Data Control Center':'مركز التحكم في البيانات','Upload data and filter every dashboard section':'رفع البيانات وفلترة كل أجزاء الداشبورد','Upload Excel / CSV anytime. The dashboard will recalculate KPIs, percentages and charts instantly.':'ارفع Excel / CSV في أي وقت وسيتم إعادة حساب الأرقام والنسب والرسومات فورًا.','+ Upload Data File':'+ رفع ملف بيانات','Reset Sample Data':'استرجاع البيانات الأساسية','Refresh Data':'تحديث البيانات','Excel Sheet':'ورقة الإكسيل','No external file loaded':'لا يوجد ملف خارجي محمل','Loading live Google Sheet...':'جاري تحميل Google Sheet مباشر...','Live Google Sheet loaded':'تم تحميل Google Sheet مباشر','Could not load Google Sheet. Make sure it is shared publicly or published to web.':'تعذر تحميل Google Sheet. تأكد أن المشاركة عامة أو منشور على الويب.','Saved data loaded. Press Refresh Google Sheet to update live data.':'تم تحميل البيانات المحفوظة. اضغط تحديث Google Sheet لجلب آخر تعديل','Month':'الشهر','Sales / Owner':'المبيعات / المسؤول','Status':'الحالة','Source':'المصدر','From Date':'من تاريخ','To Date':'إلى تاريخ','Search Name / Phone':'بحث بالاسم / الهاتف','Search...':'بحث...','Clear Filters':'مسح الفلاتر','All':'الكل','External file loaded from browser storage':'تم تحميل ملف خارجي من ذاكرة المتصفح','Loaded':'تم تحميل','rows':'صف','sheets':'ورقة','Dashboard refreshed':'تم تحديث البيانات','Could not read this file. Please use Excel or CSV.':'تعذر قراءة الملف. استخدم Excel أو CSV.','Sample data restored':'تم استرجاع البيانات الأساسية','No data for selected filters':'لا توجد بيانات حسب الفلاتر المختارة','Top Source':'أعلى مصدر','Highest lead source':'أعلى مصدر للعملاء','Top Status':'أعلى حالة','Dominant customer status':'أكثر حالة تكرارًا','Lead Source Breakdown':'تحليل مصادر العملاء','Status Leader':'الحالة الأعلى','Source Leader':'المصدر الأعلى','Executive Focus':'التركيز التنفيذي','Highest status by count and percentage.':'أعلى حالة حسب العدد والنسبة.','Highest source by count and percentage.':'أعلى مصدر حسب العدد والنسبة.','Auto-generated from the selected filters.':'يتم توليدها تلقائيًا حسب الفلاتر المختارة.','Follow conversion and lead quality':'متابعة التحويل وجودة العملاء','Review high-volume statuses and sources to improve closing rate.':'راجع الحالات والمصادر الأعلى لتحسين معدل الإغلاق.','Reduce unreachable leads':'تقليل العملاء غير المتاحين','Check phone quality, call timing and follow-up process.':'راجع جودة الأرقام وتوقيت الاتصال وعملية المتابعة.','Scale reservation sources':'تكبير مصادر الحجز','Prioritize channels and sales behaviors driving reservations.':'ركز على القنوات وسلوكيات البيع التي تحقق حجوزات.','Convert inquiries to reservations':'تحويل الاستفسارات إلى حجوزات','Use follow-up actions to move inquiry leads into interested and reservation stages.':'استخدم المتابعة لنقل عملاء الاستفسار إلى مهتم ثم حجز.','Closed / Reserved Units':'عدد الوحدات المحجوزة / المغلقة','All reservation / reserved / deposit / contract statuses':'كل حالات الحجز والتعاقد','Sales Conversion Funnel':'مسار تحويل المبيعات','Inquiry → Interested → Reserved → Contract Signed':'استفسار → مهتم → حجز → عقد نهائي','Inquiry':'استفسار','Interested':'مهتم','Reserved / Closed':'محجوز / مغلق','Contract Signed':'عقد نهائي','of total leads':'من إجمالي العملاء','from previous stage':'من المرحلة السابقة' } };
const originalText=new WeakMap();
function t(text){ return currentLang==='ar' ? (translations.ar[text] || text) : text; }
function translateTextNodes(lang){
 currentLang=lang; localStorage.setItem('takyiemLang',lang); document.documentElement.lang=lang==='ar'?'ar':'en'; document.documentElement.dir=lang==='ar'?'rtl':'ltr'; document.body.classList.toggle('rtl',lang==='ar');
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
 nodes.forEach(node=>{ const base=originalText.get(node)||node.nodeValue; if(!originalText.has(node)) originalText.set(node,base); const trimmed=base.trim(); if(!trimmed) return; node.nodeValue=base.replace(trimmed, lang==='ar' ? (translations.ar[trimmed]||trimmed) : trimmed); });
 const btn=byId('langToggle'); if(btn) btn.textContent=lang==='ar'?'English':'العربية'; const created=byId('createdByText'); if(created) created.textContent=t('Created by Ahmed Khaled');
 populateFilters(); renderTables();
}
function initLanguageToggle(){ byId('langToggle')?.addEventListener('click',()=>translateTextNodes(currentLang==='ar'?'en':'ar')); translateTextNodes(currentLang); }
function build(){ allRows=allRows.map(r=>({...r, sheet:r.sheet||r.month||'Sample', sales: canonicalSales(r.sales), comment: canonicalStatus(r.comment), source: canonicalSource(r.source)})); initFilters(); initUpload(); renderTables(); initLanguageToggle(); }
document.addEventListener('DOMContentLoaded',build);
function getSafeDateForWeek(dateStr){
  const clean = parseExcelDate(dateStr);
  if(!clean) return null;

  const parts = clean.split('-');
  if(parts.length !== 3) return null;

  const y = Number(parts[0]);
  const m = Number(parts[1]);
  const d = Number(parts[2]);

  if(!y || !m || !d) return null;

  return new Date(y, m - 1, d);
}

function renderWeeklyPeakAnalysis(){
  const bestEl = byId('weeklyPeakBest');
  const cardsEl = byId('weeklyPeakCards');
  const tableEl = byId('weeklyPeakTable');

  if(!bestEl || !cardsEl || !tableEl) return;

  const rows = filteredRows();

  const weekDays = [
    { en:'Saturday', ar:'السبت', index:6 },
    { en:'Sunday', ar:'الأحد', index:0 },
    { en:'Monday', ar:'الاثنين', index:1 },
    { en:'Tuesday', ar:'الثلاثاء', index:2 },
    { en:'Wednesday', ar:'الأربعاء', index:3 },
    { en:'Thursday', ar:'الخميس', index:4 },
    { en:'Friday', ar:'الجمعة', index:5 }
  ];

  const monthly = {};

  rows.forEach(r => {
    const d = getSafeDateForWeek(r.date);
    if(!d) return;

    const monthKey = d.toLocaleString('en-US', {
      month:'short',
      year:'numeric'
    });

    const day = weekDays.find(x => x.index === d.getDay());
    if(!day) return;

    if(!monthly[monthKey]){
      monthly[monthKey] = {
        month: monthKey,
        total: 0,
        days: {}
      };

      weekDays.forEach(x => {
        monthly[monthKey].days[x.en] = 0;
      });
    }

    monthly[monthKey].days[day.en]++;
    monthly[monthKey].total++;
  });

  const data = Object.values(monthly);

  if(!data.length){
    bestEl.innerHTML = '-';
    cardsEl.innerHTML = `<div class="empty-state">لا توجد بيانات حسب الفلتر الحالي</div>`;
    tableEl.innerHTML = '';
    return;
  }

  data.forEach(m => {
    let peakDay = weekDays[0];
    let peakCount = 0;

    weekDays.forEach(day => {
      const count = m.days[day.en] || 0;
      if(count > peakCount){
        peakDay = day;
        peakCount = count;
      }
    });

    m.peakDay = peakDay.en;
    m.peakDayAr = peakDay.ar;
    m.peakCount = peakCount;
  });

  data.sort((a,b) => {
    const da = new Date('01 ' + a.month);
    const db = new Date('01 ' + b.month);
    return da - db;
  });

  const overall = {};
  weekDays.forEach(day => overall[day.en] = 0);

  data.forEach(m => {
    weekDays.forEach(day => {
      overall[day.en] += m.days[day.en] || 0;
    });
  });

  let overallPeak = weekDays[0];
  let overallPeakCount = 0;

  weekDays.forEach(day => {
    if(overall[day.en] > overallPeakCount){
      overallPeak = day;
      overallPeakCount = overall[day.en];
    }
  });

  bestEl.innerHTML = `
    <div style="font-size:12px;opacity:.85">Overall Peak Day</div>
    <div style="font-size:24px;margin-top:4px">${overallPeak.en}</div>
    <div style="font-size:13px;margin-top:4px">${overallPeak.ar} • ${fmt.format(overallPeakCount)} records</div>
  `;

  cardsEl.innerHTML = data.map(m => {
    const max = Math.max(...weekDays.map(day => m.days[day.en] || 0), 1);

    return `
      <div class="weekly-card">
        <div class="month">${m.month}</div>
        <div class="peak">${m.peakDay}</div>
        <div class="sub">${m.peakDayAr} • ${fmt.format(m.peakCount)} من ${fmt.format(m.total)}</div>

        <div class="week-bars">
          ${weekDays.map(day => {
            const value = m.days[day.en] || 0;
            const width = Math.round((value / max) * 100);

            return `
              <div class="week-bar-row">
                <span>${day.en}</span>
                <div class="week-bar-track">
                  <div class="week-bar-fill" style="width:${width}%"></div>
                </div>
                <span>${fmt.format(value)}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  tableEl.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Month</th>
          ${weekDays.map(day => `<th>${day.en}</th>`).join('')}
          <th>Peak Day</th>
          <th>Peak Count</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(m => `
          <tr>
            <td>${m.month}</td>
            ${weekDays.map(day => `<td>${fmt.format(m.days[day.en] || 0)}</td>`).join('')}
            <td class="peak-cell">${m.peakDay}</td>
            <td class="peak-cell">${fmt.format(m.peakCount)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}
