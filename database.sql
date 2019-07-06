
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "sun" INT NOT NULL,
    "moon" INT NOT NULL,
    "ascendent" INT NOT NULL,
    "mercury" INT NOT NULL,
    "venus" INT NOT NULL,
    "mars" INT NOT NULL,
    "jupiter" INT NOT NULL,
    "saturn" INT NOT NULL,
    "neptune" INT NOT NULL,
    "uranus" INT NOT NULL,
    "pluto" INT NOT NULL
);

CREATE TABLE "posts" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user" NOT NULL,
"date_posted" DATE DEFAULT NOW() NOT NULL,
"entry" VARCHAR NOT NULL
);

CREATE TABLE "sun" (
"id" SERIAL PRIMARY KEY NOT NULL,
"sign" VARCHAR (15) NOT NULL,
"description_sun" VARCHAR NOT NULL
);

INSERT INTO "sun" ("sign", "description")
VALUES ('Aries', 'As the first sign of the zodiac, Aries are all about fresh starts. They are active and will likely make good athletes. They’re straightforward and direct and when people do not share this trait, it confuses them. They deeply enjoy challenges and can be quite competitive. Aries Suns are sometimes impatient since they gravitate towards the quickest path for everything they do. They are also innovative pioneers in what ever they do.');

INSERT INTO "sun" ("sign", "description")
VALUES ('Taurus', 'Taurus Suns are very hardworking when it comes to their jobs, but at home they are all about comfort and relaxation. They are sensual people, and enjoy indulging all of their senses whether it comes to great food, a fuzzy blanket, or just taking in all the sights and smells of nature. Taurus Suns also tend to be quite materialistic.');

INSERT INTO "sun" ("sign", "description")
VALUES ('Gemini', 'Gemini Suns are all about mental stimulation. They love to collect and share information. They typically will know a small amount about many subjects rather than a vast amount on a few subjects. This is due to having a smaller attention span. They are curious, witty, and very clever. They can adapt to new situations very well, often adopting the moods of the people around them. They may have many friends and contacts, but getting close to Gemini Suns can be difficult.');

INSERT INTO "sun" ("sign", "description")
VALUES ('Cancer', 'Cancer Suns are very dependable and caring. They want security and with that comes a strong sense of survival. They are more resistant to change since it may infringe on that security they hold so tightly. Cancers love to reminisce and find pleasure looking through old photos, and the like. They can be quite sensitive and will avoid direct confrontations.');

INSERT INTO "sun" ("sign", "description")
VALUES ('Leo', 'Leo Suns are warm and generous folk. Their happiness comes from others and they want to spread that happiness to others and the rest of the world; making it a better place. Their self image is very important and would be very hurt if accused of bad intentions. They are very similar to their symbol, the lion, in that they can be very hardworking but also have bouts of laziness. However when Leos do get to work, that is where their inner fire bursts forth and they do their jobs with intensity.');

INSERT INTO "sun" ("sign", "description")
VALUES ('Virgo', 'Virgo Suns are self sufficient and quite hardworking. They also can be reserved around new people, but once comfortable they become very talkative. Virgos also do not typically like to be the center of attention. They are very worried people. They worry about health, work, and basically life in general. They are natural perfectionists which can lead to being severely self critical. Even though many Virgos lack confidence, their work is something they are profoundly proud of. They believe their way is the best way. If Virgos feel appreciated and useful, they will return with immense amounts of kindness.');

INSERT INTO "sun" ("sign", "description")
VALUES ('Libra', 'Harmony is what Libra Suns are all about. They are the peace-keepers and will do what ever is necessary to keep the balance. They are sociable intellectuals, and people gravitate towards their approachable presence. Libra Suns just want life to be fair.');

INSERT INTO "sun" ("sign", "description")
VALUES ('Scorpio', 'Scorpio Suns are fiercely determined and observant. Intensity radiates from them and they will never be intimidated or back down from anything. Scorpios often experience quite a bit of trauma in their lives and are not afraid to talk about it. They can be pessimistic, but if they learn to see the lighter side of things and not expect the worst possible outcomes, they will find the power to heal and transform.');

INSERT INTO "sun" ("sign", "description")
VALUES ('Sagittarius', 'Sagittarius Suns are generally easy-going and fun people to be around. They love and need freedom. This freedom seeking sometimes leads people to believe they are irresponsible. They love to learn and explore, and are very optimistic towards people and the world. Sagittarius is a fire sign, and like Aries, tend to have short fuse; but they forgive and forget almost just as fast.');

INSERT INTO "sun" ("sign", "description")
VALUES ('Capricorn', 'Capricorn Suns are goal-oriented with a realistic outlook on life. They are seen as very grounded and resourceful individuals. Like Virgos, Capricorns need to feel useful and appreciated, but they also want recognition. They can be lonely people but never ever let it show. They never wear their hearts on their sleeves, as it does not coincide with their practical nature. This makes Capricorns seem reserved or even standoffish. However their sense of humor makes up for this immensely. They are usually masters of sarcasm as well.');

INSERT INTO "sun" ("sign", "description")
VALUES ('Aquarius', 'Aquarius values progress, but prefers to make it their own way. Generally they are well liked, clever, and intellectual. They are surprisingly stubborn, and will not often sway their opinions. Aquarius Suns will try to get others in their lives to “not follow the crowd” and embrace what makes the person different.');

INSERT INTO "sun" ("sign", "description")
VALUES ('Pisces', 'Pisces Suns are incredibly empathetic and understanding. Their minds are open to everyone and anyone from any background. They have a deep love for humanity and are not likely to cause hurt to anyone. They are sensitive to criticism and will retreat into their own dream worlds if reality seems too harsh. They tend to spend a lot of time in quiet suffering, but will use it to gain strength, understanding, and even more compassion for others. Pisces are often very creative, and express themselves in the arts.');

CREATE TABLE "moon" (
"id" SERIAL PRIMARY KEY NOT NULL,
"sign" VARCHAR (15) NOT NULL,
"description_moon" VARCHAR NOT NULL
);

INSERT INTO "moon" ("sign", "description")
VALUES ('Aries', 'Aries moons are the “go, go, go” people. They always want to be doing something all the time. This can translate to being impatient, and sometimes having a very short fuse with an even shorter explosion. If Aries moons aren’t constantly doing something they may become anxious and irritable. They have a need for independence and may also have many short lived crushes/relationships. A good thing to be mindful of for people with this placement is to just practice being more patient.');

INSERT INTO "moon" ("sign", "description")
VALUES ('Taurus', 'Taurus moons are very emotionally stable and incredibly sensual people. They have a need for getting deeply in touch with themselves and with the earth. Often nature lovers, they may not be the ones to be very active outside but love to take in the scenery and just exist in nature. In bad times, Taurus moons may over indulge their senses. Taurus is a fixed sign, stubborn and unwavering. They’re resistant to change and because of this, things like breakups may not come easily.');

INSERT INTO "moon" ("sign", "description")
VALUES ('Gemini', 'Gemini Moons are great conversationalists. They’re very talkative, charming, engaging and witty. They need a lot of mental stimulation to avoid becoming irritable. They may be sour towards loved ones but very friendly towards strangers. People with this placement should be mindful of that potential sourness to avoid seeming two-faced. Gemini Moons are also very open to talking about their feelings and the feelings of others but will have trouble actually feeling their own feelings. Instead they’ll put them at a distance; this causes other people and themselves confusion at times.');

INSERT INTO "moon" ("sign", "description")
VALUES ('Cancer', 'Cancer Moons feel right at home in this placement since their sign is ruled by the moon. They are incredibly nurturing and very in touch with their emotions. Their nurturing nature may lead to clinginess. Cancer Moons often have a very good memory of past events, especially emotionally charged memories. This may cause them to dwell on the past if it was something that hurt them. If given security and tenderness, Cancer Moons return with warmth and protection. They yearn for peace and stability.');

INSERT INTO "moon" ("sign", "description")
VALUES ('Leo', 'Leo Moons love attention and praise. Their emotional security is gained from praise they believe they deserve. They’re often creative and like to entertain, and absolutely do not like being ignored. If their pride is wounded, they will likely make a dramatic scene and sulk if they’re at home. Out in the world however, their self image is too important so they will not likely make a scene. They want people to think the best of them.');

INSERT INTO "moon" ("sign", "description")
VALUES ('Virgo', 'Virgo Moons are incredibly detail oriented. They are also very critical of themselves and this can sometimes turn into extreme perfectionism. This self critiquing also causes Virgo Moons to be experts in self deprecating humor. They may be the type who cleans when stressed. They like to feel needed and useful. If they do not feel useful or needed, they become unhappy and tend to complain a lot. Virgo Moons are often shy in relationships and around new people.');

INSERT INTO "moon" ("sign", "description")
VALUES ('Libra', 'People are drawn to Libra Moons and find them attractive to be around. They are social people who often rely on relationships to feel secure. You will probably never see a Libra Moon eating lunch alone! They’re lovers of beauty and are quick to notice flaws whether it be the world or with the people around them. They strive for harmony in every aspect of their life.');

INSERT INTO "moon" ("sign", "description")
VALUES ('Scorpio', 'Scorpio Moons are emotionally intense. They feel their emotions very deeply in an “all or nothing” way. Their emotions with control them completely, or they have mastery over them. They can often see past someone’s emotional walls and see them for what they are at their emotional core. Transformation and rebirth are common for this placement. While Scorpio Moons can be very loyal in relationships, they can also be jealous and manipulative.');

INSERT INTO "moon" ("sign", "description")
VALUES ('Sagittarius', 'Sagittarius Moons are optimistic and typically easy-going. They need their personal space and their freedom. If a situation becomes too intense for them, they’ll likely flee to avoid it. If they are feeling trapped, this will also cause them to flee. Sagittarius Moons are also very adaptable and spontaneous. They love to just wing it rather than getting bogged down with detailed planning. Lovers of travel and new experience, people with this placement often make wonderful teachers.');

INSERT INTO "moon" ("sign", "description")
VALUES ('Capricorn', 'On the outside Capricorn Moons are calm and composed. They keep their emotions in check and under tight control. This may lead to seeming distant and cold towards others. They do not lack emotions, but instead keep them hidden under the surface. Capricorn Moons are ambitious but may not be much of a risk taker. They seek security and safety in life.');

INSERT INTO "moon" ("sign", "description")
VALUES ('Aquarius', 'Aquarius Moons feel they are completely unique and are quite proud of this. They can often detach themselves from their emotions claiming they are “above” them. Humanitarian efforts speak to them although only on the broader spectrum. With people close to them they actually seemingly lack compassion and expect everyone to be as independent as they are. Aquarius Moons make wonderful friends, and tend to do better in friendships than relationships.');

INSERT INTO "moon" ("sign", "description")
VALUES ('Pisces', 'Pisces Moons typically have excellent intuition. They are compassionate and very sensitive people. They are day dreamers and will sometimes retreat from the harshness of reality into their imagination. Because of their vast imagination, they are often creative people. Pisces Moons need time alone to recharge. They turn to music and water to heal.');

CREATE TABLE "ascendent" (
"id" SERIAL PRIMARY KEY NOT NULL,
"sign" VARCHAR (15) NOT NULL,
"description_asc" VARCHAR NOT NULL
);

INSERT INTO "ascendent" ("sign", "description")
VALUES ('Aries', 'Aries risings are quick to act without thinking. They’re very direct and straightforward. They are competitive and strive to be the best. Everything needs to be done quickly, so they do not have much patience for sitting around.');

INSERT INTO "ascendent" ("sign", "description")
VALUES ('Taurus', 'Taurus risings radiate stability. They use a practical approach and feel out the environment before acting. Their stubbornness makes it difficult to sway this fixed sign. They are also the sign of “self indulgence” and will seek out the best things in life.');

INSERT INTO "ascendent" ("sign", "description")
VALUES ('Gemini', 'Gemini risings are curious and love to mingle and ask many questions. The world is a place for them to learn and they will restlessly seek out as much information as they can. The combination of curiosity and quick mindedness, they can be easily distracted and have a short attention span.');

INSERT INTO "ascendent" ("sign", "description")
VALUES ('Cancer', 'Cancer risings put out an approachable and familiar aura around them. When faced with new situations, their instinct is to protect themselves, and to sometimes withdraw in order to do so. Others will see them as very caring, sweet people.');

INSERT INTO "ascendent" ("sign", "description")
VALUES ('Leo', 'Leo risings have a child-like spirited nature. They pay a lot of attention to their personal appearance and often choose youthful looks. Their magnetic energy draws in everyone around them. Drama also follows this sign. They can sometimes get too caught up in it. Like the Leo’s ruler, the sun, Leos are warm and generous.');

INSERT INTO "ascendent" ("sign", "description")
VALUES ('Virgo', 'Virgo risings are intelligent and reserved. They will start off as shy, as they need to quietly observe and analyze situations before opening themselves up to them. They can be picky eaters and are very body-aware. They also tend to attract people who need help.');

INSERT INTO "ascendent" ("sign", "description")
VALUES ('Libra', 'Libra risings come across as fair, pleasant people. Their image is easygoing and gentle. Some Libra risings will jump from relationship to relationship. They find it difficult to go without a significant other.');

INSERT INTO "ascendent" ("sign", "description")
VALUES ('Scorpio', 'Scorpio risings have a strong presence. That presence can either intimidate others or command respect from them. They can see below someone’s surface and see their truer selves. They are typically attracted to grounded down to earth people. Overall they are intense, determined people with fantastic strategic ability.');

INSERT INTO "ascendent" ("sign", "description")
VALUES ('Sagittarius', 'Adventurers! Sagittarius risings are optimistic, enthusiastic, and always willing to explore and experiment. They also tend to have opinions on everything and will always let you know what they are. When Sagittarius risings are feeling low, they still hold onto their great sense of humor.');

INSERT INTO "ascendent" ("sign", "description")
VALUES ('Capricorn', 'Capricorn risings have a very serious nature to them. Though they come off serious, they have a fantastic sense of humor and are very witty. Their self image, specifically appearing successful, is very important to them. People see Capricorn risings as competent and responsible people. They have a lot of inner struggle, and worry whether or not they are doing enough/if they are enough.');

INSERT INTO "ascendent" ("sign", "description")
VALUES ('Aquarius', 'Aquarius risings come across very unique and different from the norm. Their quirkiness makes them very interesting people to be around. Generally they are friendly but can be a little standoffish while also being somewhat humanitarian. They like to shock people and will quietly provoke others and get a little rise from it.');

INSERT INTO "ascendent" ("sign", "description")
VALUES ('Pisces', 'Pisces risings are very much akin to their element of water and will go with the flow of life. Sometimes their calm waters will make them quiet and shy, while more turbulent waters being out a talkative and passionate side. They have big hearts and care deeply for others. They change their minds often, so planning ahead isn’t something they are likely to do. They are often found with their heads in the clouds but are very charming and soft.');

CREATE TABLE "mercury" (
"id" SERIAL PRIMARY KEY NOT NULL,
"sign" VARCHAR (15) NOT NULL,
"description_mercury" VARCHAR NOT NULL
);

INSERT INTO "mercury" ("sign", "description")
VALUES ('Aries', 'Those with Mercury in Aries are quick decision makers. They are direct and can sometimes come off as aggressive. This placement will also be sensitive and defensive when it comes to their ideas. They never bother with details and prefer a more streamlined and direct approach to learning. Mercury in Aries also tend to jump from one new idea to the next.');

INSERT INTO "mercury" ("sign", "description")
VALUES ('Taurus', 'Unlike the lightning fast decision makers of Aries in Mercury, Taurus in Mercury are the opposite. They take their time to make decisions. When they do make them, they are seldom swayed to any other option and are very stubborn with their opinions. People take them seriously and really listen when Taurus in Mercury speaks. Their words have weight to them, and people can see the practical force behind them. They are visual learners.');

INSERT INTO "mercury" ("sign", "description")
VALUES ('Gemini', 'Mercury rules over Gemini and is at home here. Their communication is smooth, decisions are made quickly and well. People with Mercury in Gemini can take in a lot of information, learn quickly, and will likely know a little about many things. They can be rather scattered, and need a stimulating learning environment. Because Gemini tends to detach from emotion, their communications can lack a personal touch and make it hard for others to connect with them.');

INSERT INTO "mercury" ("sign", "description")
VALUES ('Cancer', 'This placement makes for an amazing memory. Mercury in Cancer folk use personal experiences when they communicate and can remember striking details from the past. They will always remember the emotional side of things the most. They spend a lot of time dwelling on their thoughts, so while it seems to take them a long time to make a decision, that may not be the case. They are at their best for learning when emotionally balanced and can retain a lot of information.');

INSERT INTO "mercury" ("sign", "description")
VALUES ('Leo', 'Leo in Mercury commands attention when they speak. Their speech is enthusiastic and passionate. There is also a certain warmth in their words. They take pride in their opinions, and have a need to express their creativity. Leo in Mercury people are also great at the art of persuasion.');

INSERT INTO "mercury" ("sign", "description")
VALUES ('Virgo', 'Virgo in Mercury placements will find themselves extremely detail oriented in information gathering. They do have a weakness of not always being able to see the big picture and focusing too much on the little details. Their communications with others are not necessarily expressive, but they have a lot of information to give and enjoy when their contributions are appreciated. Their thoughts and ideas are organized. They complete daily tasks and errands quickly and efficiently. Virgo in Mercury folk need an organized and structured learning environment.');

INSERT INTO "mercury" ("sign", "description")
VALUES ('Libra', 'This is where the indecisiveness stereotype for Libra rears its head. They look at opinions and ideas from all sides and do their best to remain on neutral ground. They want everyone they communicate with to be intellectual equals and become frustrated when that is not the case. Their speech is gentle, so that they do not risk hurting anyone. They are also quite diplomatic and try to always find compromise. When making a decision, Libra in Mercury people turn to others to help. They often will play devils advocate.');

INSERT INTO "mercury" ("sign", "description")
VALUES ('Scorpio', 'Mercury in Scorpio placements are excellent researchers. They can get to the bottom of things and are incredibly observant of surroundings. They speak passionately and are best when the focus is not personal for them. If it is personal, their judgments could be biased and clouded by their own emotions. They are suspicious and always expect bad intentions from others before good ones. They support and defend loved ones to no end.');

INSERT INTO "mercury" ("sign", "description")
VALUES ('Sagittarius', 'Mercury in Sagittarius depicts a very enthusiastic and optimistic way of communicating. At their worst, they can come off a little preachy. They’ll often gloss over the details and focus more on the big picture. They favor bluntness, and will become annoyed if people are indirect or try to play mind games with them. These are the people that will make those around them feel better through their upbeat and forward thinking attitude.');

INSERT INTO "mercury" ("sign", "description")
VALUES ('Capricorn', 'Mercury in Capricorn people typically do not like a large amount of information thrown at them at once. They prefer to take something large and break it down into practical, more manageable pieces. They are generally productive people who only take on projects that can yield realistic, tangible results. They are careful with their words and are often skeptical of the words of others.');

INSERT INTO "mercury" ("sign", "description")
VALUES ('Aquarius', 'Mercury in Aquarius are very observant and love a good intellectual debate. They will never fail to bring a unique perspective to the table. Their humor is typically anything that gets a rise out of people, such as practical jokes. In studies they will not likely follow a schedule, but will organize things in their own quirky way. They are quick to point out others bias or closed mindedness.');

INSERT INTO "mercury" ("sign", "description")
VALUES ('Pisces', 'Mercury in Pisces will be more of a listener. They take in information through feelings, which gives them a different perspective from other peoples’ more practical or logical way of thinking. Their conversations are typically warm and gentle in nature. They can sometimes communicate in a vague or indirect way. They are driven more by pure intuition than by facts.');

CREATE TABLE "venus" (
"id" SERIAL PRIMARY KEY NOT NULL,
"sign" VARCHAR (15) NOT NULL,
"description_venus" VARCHAR NOT NULL
);

INSERT INTO "venus" ("sign", "description")
VALUES ('Aries', 'Venus in Aries people have an almost child-like approach to love. They do not take it too seriously nor do they enjoy playing games. They want their lovers to be direct and honest. They may have an innocent charm but may jump from one relationship to the next to keep that fresh new feeling. They adore spontaneous affection.');

INSERT INTO "venus" ("sign", "description")
VALUES ('Taurus', 'Stability is what Venus in Taurus is all about. They want someone who is loyal to them and will share in their comforts. They may become possessive in a relationship, and they require a lot of patience. This placement will likely make one resistant to changes in a relationship and result in becoming too comfortable.');

INSERT INTO "venus" ("sign", "description")
VALUES ('Gemini', 'Venus in Gemini people are light and flirty when it comes to relationships. They prefer to not get too serious and prefer to keep things fun and interesting with their partner/s. Their go-to for flirting is to impress their love interest with their conversational skills. They are playful lovers whose interests are constantly changing. They will enter relationships purely out of curiosity.');

INSERT INTO "venus" ("sign", "description")
VALUES ('Cancer', 'Venus in Cancer is an incredibly caring and sentimental placement. They can be prone to mood swings, and are likely the type to give silent treatments and sulk when they are upset. They want a committed, solid relationship built on trust, and are fearful of being rejected. When shown love and affection they are incredibly supportive and nurturing partners. When they feel secure in their relationship Cancers will be extremely affectionate and devoted to their partner.');

INSERT INTO "venus" ("sign", "description")
VALUES ('Leo', 'Venus Leos are incredibly loyal to their partners but greatly enjoy flirting and getting attention from others as well. They are lovers of love itself and are not afraid to express how much love they have for their partner. As much as they love being flirted with, if their partner were to do the same they would be hurt by this. They need a lot of attention to feel loved and appreciated.');

INSERT INTO "venus" ("sign", "description")
VALUES ('Virgo', 'Venus in Virgo is reserved and not big on flirting. They will typically not make a move until they are absolutely sure their feelings will be reciprocated. If they nag or criticize their partners, its their own way of showing they care. They pay attention to details. When their partners appreciate all the little things they do for them, they are all the more devoted to the relationship.');

INSERT INTO "venus" ("sign", "description")
VALUES ('Libra', 'Venus Libras want equality in relationships. If they are not seen on equal footing, they will not be interested. Their conceding nature can invite more aggressive types to take advantage of them. As long as they are treated kindly and as an equal, Venus Libras are happy.');

INSERT INTO "venus" ("sign", "description")
VALUES ('Scorpio', 'Venus Scorpios are intensely committed to their partners. Like Taurus, they can be possessive. They give their partners all of their attention and devotion. They may not admit to it, but they love to have control in the relationship. Their partners need to show them they’re completely loyal to them. They want to know everything about their partners, but remain somewhat a mystery themselves.');

INSERT INTO "venus" ("sign", "description")
VALUES ('Sagittarius', 'Venus in Sagittarius people need partners that they can grow with. They want to experience new and exciting things together with their love. If their partner is clingy, it will go against the Sagittarius’ need for freedom and exploration. They can be flirty and upbeat, and they love to share information with their partner.');

INSERT INTO "venus" ("sign", "description")
VALUES ('Capricorn', 'Venus Capricorns are cautious lovers. They lack in spontaneity but are still very romantic people. They crave partners who are on the same page as them, and who will have a more predictable romance. They don’t tend to waste time on love that will not likely last. They are in it for the long term.');

INSERT INTO "venus" ("sign", "description")
VALUES ('Aquarius', 'Venus in Aquarius favor unconventional and sometimes even rebellious relationships. They are attracted to unique individuals and revel in sharing how quirky they are to their partners. They want to be seen as unique and provocative. If the relationship seems too normal, they want out.');

INSERT INTO "venus" ("sign", "description")
VALUES ('Pisces', 'Venus in Pisces is the ultimate romantic. Their love is unconditional. They tend to be attracted to those who need help. This placement points towards stretching the truth from time to time. However, their intention are not malicious. They simply fear the truth may hurt their partner. They have a vast amount of compassion.');

CREATE TABLE "mars" (
"id" SERIAL PRIMARY KEY NOT NULL,
"sign" VARCHAR (15) NOT NULL,
"description_mars" VARCHAR NOT NULL
);

INSERT INTO "mars" ("sign", "description")
VALUES ('Aries', 'Mars in Aries people are impulsive and quick to take action. They have a quick temper and lose control for a short time. They are all about fresh starts and are always looking for something new.');

INSERT INTO "mars" ("sign", "description")
VALUES ('Taurus', 'Mars in Taurus’ goals are long term and achieved at a slow and steady pace. Once they have a goal in mind they are determined to reach it, but are not concerned with how long it may take. Getting a Mars Taurus to change their mind is near impossible, especially if it will go against their comfortable nature.');

INSERT INTO "mars" ("sign", "description")
VALUES ('Gemini', 'Mars in Gemini folks are full of energy and need to keep themselves busy to avoid becoming too restless and anxious. This placement is rather scattered and unfocused. When angered, Gemini Mars’ words are their main weapon. They tend to have a nervous and restless energy.');

INSERT INTO "mars" ("sign", "description")
VALUES ('Cancer', 'This placement is often associated with passive aggression. Defenses are high if feeling threatened, not unlike a crab retreating into itself for protection. They will not typically confront directly, and are slower to make decisions.');

INSERT INTO "mars" ("sign", "description")
VALUES ('Leo', 'Mars Leos like to take risks. Their actions are powerful and their ambitions are clearly defined and reachable. This placement is also highly sexual but love and romance are required for intimacy. This placement loves to create, and express themselves.');

INSERT INTO "mars" ("sign", "description")
VALUES ('Virgo', 'Mars in Virgo makes for excellent multitaskers. They can become a little scatter brained when they have so many things on their plate, but their practicality and organization helps them get it all done efficiently. This is placement is not very aggressive. If annoyed, they will tend to complain a lot.');

INSERT INTO "mars" ("sign", "description")
VALUES ('Libra', 'Mars in Libra are not known for their decisiveness. They take their time in making a decision and try to think it through completely. Rather than jumping head first into a conflict, Mars Libras will try to first find a more peaceful solution and defuse the situation before it gets out of hand. Similar to Cancer Mars, Libra Mars folk are also associated with passive aggression. ');

INSERT INTO "mars" ("sign", "description")
VALUES ('Scorpio', 'This placement loves challenges. Mars in Scorpio will take any challenge and through awesome willpower, reach feats once thought impossible. They believe in their opinions strongly, and are seldom able to see others’ perspectives. They will constantly test their limits. This placement can sometimes resort to manipulation when trying to reach their goals.');

INSERT INTO "mars" ("sign", "description")
VALUES ('Sagittarius', 'Mars in Sagittarius people are generally active. They will use physical activity to get their emotions out. They will likely try to avoid and ignore issues at hand. This placement may also start many projects but seldom finish them. They like friendly debates, but the can get out of hand sometimes.');

INSERT INTO "mars" ("sign", "description")
VALUES ('Capricorn', 'Mars Capricorns are driven by success. They have long term goals and ambitions and will do everything they can to reach them. They have incredible self control over their emotions and will not let things like anger overcome them. They keep a level head when in conflict. This placement can sometimes resort to bottling emotions, causing trouble for them later.');

INSERT INTO "mars" ("sign", "description")
VALUES ('Aquarius', 'Mars in Aquarius folk pride themselves on their individuality. They hate to feel trapped and will rebel if they feel it happening. Aquarius is a fixed sign, so they have a notorious stubborn streak. They want everyone to side with them but will never actually try to change someone into something they’re not.');

INSERT INTO "mars" ("sign", "description")
VALUES ('Pisces', 'Mars in Pisces people rarely take action themselves. They would rather let things happen on their own. They will not typically stand up for themselves, but they will do what they can to help others. This placement likes to express themselves through creativity. Their energy levels are ever fluctuating.');

CREATE TABLE "jupiter" (
"id" SERIAL PRIMARY KEY NOT NULL,
"sign" VARCHAR (15) NOT NULL,
"description_jupiter" VARCHAR NOT NULL
);

INSERT INTO "jupiter" ("sign", "description")
VALUES ('Aries', 'Through positivity, life is what you make it in this placement. If they take the lead or do the job solo, the tend to garner better results.');

INSERT INTO "jupiter" ("sign", "description")
VALUES ('Taurus', 'Confidence and a charitable nature will bring this placement good fortune. Jupiter in Taurus people also have good instincts for finances and material worth.');

INSERT INTO "jupiter" ("sign", "description")
VALUES ('Gemini', 'Jupiter in Gemini will attract luck through honest curiosity and friendliness.');

INSERT INTO "jupiter" ("sign", "description")
VALUES ('Cancer', 'When sympathetic and charitable, such as in the real estate or food industry, this placement can be quite prosperous.');

INSERT INTO "jupiter" ("sign", "description")
VALUES ('Leo', 'Generosity and inspiring confidence in those around them will bring this placement good fortune. Avoiding egotism and embracing creativity will help Jupiter Leos prosper.');

INSERT INTO "jupiter" ("sign", "description")
VALUES ('Virgo', 'Values technical and practical skills. This placement is most prosperous when they are helpful to others and pay attention to details.');

INSERT INTO "jupiter" ("sign", "description")
VALUES ('Libra', 'Good fortune finds those in this placement through balance. May need a partner to be successful but they must be on equal footing.');

INSERT INTO "jupiter" ("sign", "description")
VALUES ('Scorpio', 'Jupiter in Scorpio brings good fortune through dedication and putting their all into what ever they are doing. They favor the mysterious and taboo.');

INSERT INTO "jupiter" ("sign", "description")
VALUES ('Sagittarius', 'Jupiter in Sagittarius will find good fortune in travel, teaching, and foreign cultures. They will also find success if they are generous and practice what they preach.');

INSERT INTO "jupiter" ("sign", "description")
VALUES ('Capricorn', 'This placement will succeed as long as they are resourceful, organized, and responsible. They do best when they are in charge. Their status is valued highly by Jupiter Capricorns.');

INSERT INTO "jupiter" ("sign", "description")
VALUES ('Aquarius', 'When Jupiter in Aquarius is cooperative, and embraces their individuality they will have long lasting achievement. They can make great humanitarians.');

INSERT INTO "jupiter" ("sign", "description")
VALUES ('Pisces', 'When compassionate, charitable to those less fortunate, and devoted, this placement will find success. They should be kind to all in order to achieve.');

CREATE TABLE "saturn" (
"id" SERIAL PRIMARY KEY NOT NULL,
"sign" VARCHAR (15) NOT NULL,
"description_saturn" VARCHAR NOT NULL
);

INSERT INTO "saturn" ("sign", "description")
VALUES ('Aries', 'Saturn in Aries take longer to find their drive and figure out how to use their energy. As they get older, they find themselves to be more assertive and independent. In their youth they are more reserved. ');

INSERT INTO "saturn" ("sign", "description")
VALUES ('Taurus', 'Saturn in Taurus tends to have to work hard for what they have. As they age, they get better at speaking and communicating. Changes are achieved slowly.');

INSERT INTO "saturn" ("sign", "description")
VALUES ('Gemini', 'In youth, Saturn in Gemini people may struggle with learning, but get better as they age. They also will never forget anything they learn, and can sort through details with ease.');

INSERT INTO "saturn" ("sign", "description")
VALUES ('Cancer', 'Cancer Saturns need a safe home with family. They also are quite protective of their family and may sacrifice a lot to keep their comfortable home.');

INSERT INTO "saturn" ("sign", "description")
VALUES ('Leo', 'Leo Saturns may severally lack self confidence. They expect a lot from themselves and want admiration from those around them.');

INSERT INTO "saturn" ("sign", "description")
VALUES ('Virgo', 'Virgo Saturns can sometimes be overly critical of themselves. They are very hard workers and have a need to be productive with their time. If they aren’t working, they feel useless.');

INSERT INTO "saturn" ("sign", "description")
VALUES ('Libra', 'Libra Saturns have a difficult time connecting with people. They want to be around people but cannot help pushing them away.');

INSERT INTO "saturn" ("sign", "description")
VALUES ('Scorpio', 'Scorpio in Saturn people try hard to keep control of themselves. They have a strong will and transform themselves often.');

INSERT INTO "saturn" ("sign", "description")
VALUES ('Sagittarius', 'People with this placement try hard to appear open despite it being difficult for them to accept other points of view. Sagittarius Saturns have strong beliefs.');

INSERT INTO "saturn" ("sign", "description")
VALUES ('Capricorn', 'Saturn is right at home here in Capricorn. People with this placement are ambitious goal setters. It may take a while to achieve their goals, but they work hard until they reach them, typically when they are older. ');

INSERT INTO "saturn" ("sign", "description")
VALUES ('Aquarius', 'Aquarius Saturns may have goals relating to helping humanity. They can be emotionally distant and be lacking in intimate relationships, despite wanting them. They are able to come up with ideas that are innovative but will not stray too far from normalcy.');

INSERT INTO "saturn" ("sign", "description")
VALUES ('Pisces', 'Pisces Saturns have a strong spirituality and will sacrifice a lot to hold onto it. They are sensitive and can sometimes feel like the world is out to get them.');

CREATE TABLE "neptune" (
"id" SERIAL PRIMARY KEY NOT NULL,
"sign" VARCHAR (15) NOT NULL,
"description_neptune" VARCHAR NOT NULL
);

INSERT INTO "neptune" ("sign", "description")
VALUES ('Aries', 'Neptune in Aries people have incredibly strong beliefs and will take on many creative projects. They have a desire to improve life for everyone.');

INSERT INTO "neptune" ("sign", "description")
VALUES ('Taurus', 'Neptune in Taurus people love the arts and anything beautiful. They have an eye on their dreams and can become obsessed with them.');

INSERT INTO "neptune" ("sign", "description")
VALUES ('Gemini', 'This placement grants inspiration in their words. They get bored easily. Neptune in Gemini people may find studies in communications and mathematics.');

INSERT INTO "neptune" ("sign", "description")
VALUES ('Cancer', 'The dreams of Neptune Cancers surround their homes and their families. They are incredibly dedicated to them.');

INSERT INTO "neptune" ("sign", "description")
VALUES ('Leo', 'Neptune Leos are kids at heart no matter the age. They are attracted to entertainment and drama industries. They are very creative placements as well. ');

INSERT INTO "neptune" ("sign", "description")
VALUES ('Virgo', 'Neptune Virgos are very health conscious and will try to get those around them to adopt healthier lifestyles.');

INSERT INTO "neptune" ("sign", "description")
VALUES ('Libra', 'Neptune Libras are incredibly indecisive. This placement wants the whole world in perfect balance, not just their own lives.');

INSERT INTO "neptune" ("sign", "description")
VALUES ('Scorpio', 'Neptune Scorpios want to transform the world. They also wish to transcend themselves and are often interested in deeply spiritual experiences. They must be wary of addiction.');

INSERT INTO "neptune" ("sign", "description")
VALUES ('Sagittarius', 'Neptune in Sagittarius people gravitate to science fiction and fantasy. They enjoy expanding their world.');

INSERT INTO "neptune" ("sign", "description")
VALUES ('Capricorn', 'Neptune Capricorns are inspired through arts. They wish the world rewarded hard work more than it does and their creativity is fairly practical.');

INSERT INTO "neptune" ("sign", "description")
VALUES ('Aquarius', 'Neptune in Aquarius people are focused on the future. They thrive on their originality and are pure humanitarians at heart.');

INSERT INTO "neptune" ("sign", "description")
VALUES ('Pisces', 'Neptune in Pisces people sometimes do not grasp reality very well. They are spiritual and are attracted to the arts. They will sacrifice a lot in order to help others.');

CREATE TABLE "uranus" (
"id" SERIAL PRIMARY KEY NOT NULL,
"sign" VARCHAR (15) NOT NULL,
"description_uranus" VARCHAR NOT NULL
);

INSERT INTO "uranus" ("sign", "description")
VALUES ('Aries', 'Uranus Aries tend to have no problem coming up with new ideas, but they struggle to figure out if their ideas are good or bad. They are excited to try new things, which can sometimes lead to being impulsive. ');

INSERT INTO "uranus" ("sign", "description")
VALUES ('Taurus', 'Uranus Taurus is easy going for the most part but has quite the stubborn side.');

INSERT INTO "uranus" ("sign", "description")
VALUES ('Gemini', 'Uranus Gemini loves to learn and is especially drawn to technology. They are quite adaptable and enjoy learning about unusual subjects.');

INSERT INTO "uranus" ("sign", "description")
VALUES ('Cancer', 'Uranus Cancers have a lot of dedication to their families and their homes. Their families may border on the more unconventional side.');

INSERT INTO "uranus" ("sign", "description")
VALUES ('Leo', 'Uranus Leos are natural leaders and can speak their ideas very passionately. They will typically follow their own path.');

INSERT INTO "uranus" ("sign", "description")
VALUES ('Virgo', 'Uranus Virgos are inventive and efficient. They are fairly health conscious and may have more concern for the environment. Science is a common interest for this placement as well.');

INSERT INTO "uranus" ("sign", "description")
VALUES ('Libra', 'Uranus Libras want equality and will fight to get it for themselves and others. Their relationships need to have an unusual quality in order for them to last. This placement also may have some sort of artistic talent.');

INSERT INTO "uranus" ("sign", "description")
VALUES ('Scorpio', 'Uranus Scorpios are great researchers. They are able to find new and different ways to solving problems and are very determined in their endeavors.');

INSERT INTO "uranus" ("sign", "description")
VALUES ('Sagittarius', 'Uranus in Sagittarius people are brutally honest and do not care for the repercussions. They can be unreliable despite wanting to help. This placement loves to push boundaries when coming up with new and unconventional ideas.');

INSERT INTO "uranus" ("sign", "description")
VALUES ('Capricorn', 'Uranus Capricorns can come up with innovative ideas rather quickly, and they will almost always bring them success. They are responsible and can make quick decisions when they will help them to achieve their goals.');

INSERT INTO "uranus" ("sign", "description")
VALUES ('Aquarius', 'Uranus Aquarius people are incredibly dedicated when it comes to their friends and humanitarian causes. They are always looking towards the future but can be a little scattered.');

INSERT INTO "uranus" ("sign", "description")
VALUES ('Pisces', 'Uranus Pisces folk have wonderful intuition. They favor spiritual ideas and are attracted to fantasy. ');

CREATE TABLE "pluto" (
"id" SERIAL PRIMARY KEY NOT NULL,
"sign" VARCHAR (15) NOT NULL,
"description_pluto" VARCHAR NOT NULL
);

INSERT INTO "pluto" ("sign", "description")
VALUES ('Aries', 'Pluto in Aries people will throw themselves head first into new projects without thinking.');

INSERT INTO "pluto" ("sign", "description")
VALUES ('Taurus', 'Pluto in Taurus people are dedicated to their paths. They will follow them slowly, but will never stray from them. No matter the difficulty, they continue towards wealth and happiness.');

INSERT INTO "pluto" ("sign", "description")
VALUES ('Gemini', 'Pluto in Gemini folk strive for constant change. Knowledge is power for this placement. They can get deep into complicated issues easily and absorb a lot of information. ');

INSERT INTO "pluto" ("sign", "description")
VALUES ('Cancer', 'Pluto Cancers strive for protection. They have strong emotions and their needs for security will change over time.');

INSERT INTO "pluto" ("sign", "description")
VALUES ('Leo', 'Pluto Leos strive to express themselves. They can be dramatic, but they give their all to the things they are passionate about. This is especially true for romance.');

INSERT INTO "pluto" ("sign", "description")
VALUES ('Virgo', 'Pluto Virgos do not like to be in the lime light, but will always strive to make things better whenever and if possible. They sometimes sacrifice their own needs to help others.');

INSERT INTO "pluto" ("sign", "description")
VALUES ('Libra', 'Pluto Libras find growth through their relationships. They are all about compromise and are always striving for balance and equality.');

INSERT INTO "pluto" ("sign", "description")
VALUES ('Scorpio', 'Pluto Scorpios are able to deal with inner issues with determination. They will fight fiercely for what they believe is right and not care much for rules.');

INSERT INTO "pluto" ("sign", "description")
VALUES ('Sagittarius', 'This placement finds growth through new experiences. Pluto in Sagittarius challenges others to open their minds to new beliefs and ideas, and are generally optimistic.');

INSERT INTO "pluto" ("sign", "description")
VALUES ('Capricorn', 'Pluto Capricorns are practical and hard-working. They are responsible and practice good self control.');

INSERT INTO "pluto" ("sign", "description")
VALUES ('Aquarius', 'Pluto in Aquarius need to do things in their own individual way. Their ideas can push boundaries of the norm. They also want freedom for everyone.');

INSERT INTO "pluto" ("sign", "description")
VALUES ('Pisces', 'This placement may tend to constantly worry whether or not their decisions effect others negatively. They can be inspiring people, and may feel misunderstood sometimes.');

CREATE TABLE "profile" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user" NOT NULL,
"sun_id" INT REFERENCES "sun" NOT NULL,
"moon_id" INT REFERENCES "moon" NOT NULL,
"ascendent_id" INT REFERENCES "ascendent" NOT NULL,
"mercury_id" INT REFERENCES "mercury" NOT NULL,
"venus_id" INT REFERENCES "venus" NOT NULL,
"mars_id" INT REFERENCES "mars" NOT NULL,
"jupiter_id" INT REFERENCES "jupiter" NOT NULL,
"saturn_id" INT REFERENCES "saturn" NOT NULL,
"neptune_id" INT REFERENCES "neptune" NOT NULL,
"uranus_id" INT REFERENCES "uranus" NOT NULL,
"pluto_id" INT REFERENCES "pluto" NOT NULL
);

INSERT INTO "profile" ("user_id", "sun_id", "moon_id", "ascendent_id", "mercury_id", "venus_id", "mars_id", "jupiter_id", "saturn_id", "neptune_id", "uranus_id", "pluto_id")
VALUES (1, 10, 6, 10, 9, 8, 9, 6, 11, 10, 10, 8);