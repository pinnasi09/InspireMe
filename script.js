// Predefined list of quotes

document.addEventListener('DOMContentLoaded', () => {
    const themeTog = document.getElementById("toggle");
    const body = document.body;
    themeTog.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        themeTog.textContent = body.classList.contains('dark-mode') ? '🌙' : '☀️';
    });
});

/*function theme(){
    const themeTog=document.getElementById("toggle");
    const body =document.body;
    themeTog.addEventListener('click',()=>{
        body.classList.toggle('dark-mode');
        themeTog.textContent = body.classList.contains('dark-mode') ? ;
    });
}*/

const quotes = {
    motivation:[
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
        "The best way to predict the future is to create it. - Peter Drucker",
        "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
        "It does not matter how slowly you go as long as you do not stop. - Confucius",
        "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
        "You miss 100% of the shots you don't take. - Wayne Gretzky",
        "Act as if what you do makes a difference. It does. - William James",
        "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
        "It always seems impossible until it's done. - Nelson Mandela",
        "If you’re going through hell, keep going. - Winston Churchill",
        "The harder you work for something, the greater you’ll feel when you achieve it. - Unknown",
        "Don’t stop when you’re tired. Stop when you’re done. - Unknown",
        "Success doesn’t just find you. You have to go out and get it. - Unknown",
        "Dream it. Wish it. Do it. - Unknown",
        "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
        "Opportunities don't happen, you create them. - Chris Grosser",
        "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
        "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
        "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
        "Try not to become a person of success, but rather try to become a person of value. - Albert Einstein",
        "The way to get started is to quit talking and begin doing. - Walt Disney",
        "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
        "What seems to us as bitter trials are often blessings in disguise. - Oscar Wilde",
        "Don’t let yesterday take up too much of today. - Will Rogers",
        "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
        "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
        "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
        "Do what you can with all you have, wherever you are. - Theodore Roosevelt",
        "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
        "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
        "Everything you’ve ever wanted is on the other side of fear. - George Addair",
        "Don’t wait for opportunity. Create it. - Unknown",
        "Success doesn’t come to you, you go to it. - Marva Collins",
        "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
        "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
        "Don’t wish it were easier. Wish you were better. - Jim Rohn",
        "We generate fears while we sit. We overcome them by action. - Dr. Henry Link",
        "The more you praise and celebrate your life, the more there is in life to celebrate. - Oprah Winfrey",
        "The secret of getting ahead is getting started. - Mark Twain",
        "The man who has confidence in himself gains the confidence of others. - Hasidic Proverb",
        "What we achieve inwardly will change outer reality. - Plutarch",
        "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
        "To see what is right and not do it is a lack of courage. - Confucius",
        "You don’t have to be great to start, but you have to start to be great. - Zig Ziglar",
        "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
        "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
        "Don’t count the days, make the days count. - Muhammad Ali",
        "Whether you think you can or think you can’t, you’re right. - Henry Ford",
        "Don’t limit your challenges, challenge your limits. - Unknown",
        "Motivation is what gets you started. Habit is what keeps you going. - Jim Rohn",
        "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
        "Success is the sum of small efforts, repeated day-in and day-out. - Robert Collier",
        "The best revenge is massive success. - Frank Sinatra",
        "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
        "Your limitation—it’s only your imagination. - Unknown",
        "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
        "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
        "Great things never come from comfort zones. - Unknown",
        "Dream big and dare to fail. - Norman Vaughan",
        "Success is not in what you have, but who you are. - Bo Bennett",
        "It’s not about ideas. It’s about making ideas happen. - Scott Belsky",
        "If you want something you’ve never had, you must be willing to do something you’ve never done. - Thomas Jefferson",
        "You don’t need to be better than anyone else, you just need to be better than you used to be. - Wayne Dyer",
        "Success is a journey, not a destination. - Arthur Ashe",
        "You don’t drown by falling in the water; you drown by staying there. - Edwin Louis Cole",
        "If you want to achieve greatness stop asking for permission. - Unknown",
        "If you are not willing to risk the usual, you will have to settle for the ordinary. - Jim Rohn",
        "If it’s important to you, you’ll find a way. If not, you’ll find an excuse. - Ryan Blair",
        "Success isn’t about being the best. It’s about always getting better. - Behdad Sami",
        "The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey",
        "Your life does not get better by chance, it gets better by change. - Jim Rohn",
        "A goal is not always meant to be reached; it often serves simply as something to aim at. - Bruce Lee",
        "Strive not to be a success, but rather to be of value. - Albert Einstein",
        "Small daily improvements over time lead to stunning results. - Robin Sharma",
        "Do something today that your future self will thank you for. - Sean Patrick Flanery",
        "It’s not about how bad you want it. It’s about how hard you’re willing to work for it. - Unknown",
        "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
        "Doubt kills more dreams than failure ever will. - Suzy Kassem",
        "A winner is a dreamer who never gives up. - Nelson Mandela",
        "If you can dream it, you can do it. - Walt Disney",
        "Work hard in silence, let your success be your noise. - Frank Ocean",
        "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. - Earl Nightingale",
        "If you really look closely, most overnight successes took a long time. - Steve Jobs",
        "Success is how high you bounce when you hit bottom. - George S. Patton",
        "Failure is another steppingstone to greatness. - Oprah Winfrey",
        "I failed my way to success. - Thomas Edison",
        "Set your goals high, and don’t stop till you get there. - Bo Jackson"
    ],
    love:[
        "Love is composed of a single soul inhabiting two bodies. - Aristotle",
        "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. - Lao Tzu",
        "Love is when the other person's happiness is more important than your own. - H. Jackson Brown, Jr.",
        "The best thing to hold onto in life is each other. - Audrey Hepburn",
        "We are shaped and fashioned by what we love. - Johann Wolfgang von Goethe",
        "The giving of love is an education in itself. - Eleanor Roosevelt",
        "Love doesn’t make the world go round. Love is what makes the ride worthwhile. - Franklin P. Jones",
        "There is no remedy for love but to love more. - Henry David Thoreau",
        "To love and be loved is to feel the sun from both sides. - David Viscott",
        "Love is not only something you feel, it is something you do. - David Wilkerson",
        "To love at all is to be vulnerable. - C.S. Lewis",
        "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope. - Maya Angelou",
        "Where there is love there is life. - Mahatma Gandhi",
        "Love is that condition in which the happiness of another person is essential to your own. - Robert A. Heinlein",
        "Love is friendship that has caught fire. - Ann Landers",
        "Love is the only reality, and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation. - Rabindranath Tagore",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss",
        "Love cures people—both the ones who give it and the ones who receive it. - Karl Menninger",
        "Love is the greatest refreshment in life. - Pablo Picasso",
        "Love and compassion are necessities, not luxuries. Without them, humanity cannot survive. - Dalai Lama",
        "A loving heart is the truest wisdom. - Charles Dickens",
        "Love is not about possession. Love is about appreciation. - Osho",
        "The best love is the kind that awakens the soul; that makes us reach for more, that plants the fire in our hearts and brings peace to our minds. - Nicholas Sparks",
        "True love is eternal, infinite, and always like itself. It is equal and pure, without violent demonstrations: it is seen with white hairs and is always young in the heart. - Honore de Balzac",
        "Love is an irresistible desire to be irresistibly desired. - Robert Frost",
        "You don’t love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear. - Oscar Wilde",
        "We are most alive when we're in love. - John Updike",
        "Love is the flower you’ve got to let grow. - John Lennon",
        "Love is the only force capable of transforming an enemy into a friend. - Martin Luther King, Jr.",
        "True love stories never have endings. - Richard Bach",
        "To love and be loved is to feel the sun from both sides. - David Viscott",
        "Love is composed of a single soul inhabiting two bodies. - Aristotle",
        "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart. - Helen Keller",
        "There is always some madness in love. But there is also always some reason in madness. - Friedrich Nietzsche",
        "You don't love someone because they're perfect, you love them in spite of the fact that they're not. - Jodi Picoult",
        "Love looks not with the eyes, but with the mind, and therefore is winged Cupid painted blind. - William Shakespeare",
        "Love is a better teacher than duty. - Albert Einstein",
        "Love doesn't just sit there, like a stone; it has to be made, like bread, remade all the time, made new. - Ursula K. Le Guin",
        "The way to love anything is to realize that it may be lost. - Gilbert K. Chesterton",
        "Love is that condition in which the happiness of another person is essential to your own. - Robert Heinlein",
        "Let us always meet each other with a smile, for the smile is the beginning of love. - Mother Teresa",
        "Love is a friendship set to music. - Joseph Campbell",
        "I have decided to stick with love. Hate is too great a burden to bear. - Martin Luther King, Jr.",
        "Love is like the wind, you can’t see it but you can feel it. - Nicholas Sparks",
        "To love oneself is the beginning of a lifelong romance. - Oscar Wilde",
        "The greatest thing you'll ever learn is just to love and be loved in return. - Eden Ahbez",
        "We accept the love we think we deserve. - Stephen Chbosky",
        "Love is a game that two can play and both win. - Eva Gabor",
        "The heart has its reasons, of which reason knows nothing. - Blaise Pascal",
        "Love is the only reality, and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation. - Rabindranath Tagore",
        "Love doesn’t just sit there, like a stone; it has to be made, like bread, remade all the time, made new. - Ursula K. Le Guin",
        "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves. - Victor Hugo",
        "To love and be loved is to feel the sun from both sides. - David Viscott",
        "In the end, the love you take is equal to the love you make. - Paul McCartney",
        "Love is the only force capable of transforming an enemy into a friend. - Martin Luther King, Jr.",
        "Love is the strongest force the world possesses, and yet it is the humblest imaginable. - Mahatma Gandhi",
        "Love is the voice under all silences, the hope which has no opposite in fear. - E.E. Cummings",
        "Love is the beauty of the soul. - Saint Augustine",
        "There is only one happiness in this life, to love and be loved. - George Sand",
        "Love is not something you feel. It’s something you do. - David Wilkerson",
        "At the touch of love, everyone becomes a poet. - Plato",
        "There is no charm equal to tenderness of heart. - Jane Austen",
        "Love is the expansion of two natures in such fashion that each includes the other, each is enriched by the other. - Felix Adler",
        "The most important thing in life is to learn how to give out love, and to let it come in. - Morrie Schwartz",
        "We loved with a love that was more than love. - Edgar Allan Poe",
        "To love is nothing. To be loved is something. But to love and be loved, that’s everything. - T. Tolis",
        "Love is the master key that opens the gates of happiness. - Oliver Wendell Holmes",
        "Love is not finding someone to live with; it’s finding someone you can’t live without. - Rafael Ortiz",
        "The best proof of love is trust. - Joyce Brothers",
        "You don’t marry someone you can live with – you marry someone you cannot live without. - Unknown",
        "Love is a canvas furnished by nature and embroidered by imagination. - Voltaire",
        "In love, one and one are one. - Jean-Paul Sartre",
        "Love is not only something you feel, it is something you do. - David Wilkerson",
        "If I know what love is, it is because of you. - Hermann Hesse",
        "You are my heart, my life, my one and only thought. - Arthur Conan Doyle",
        "The art of love is largely the art of persistence. - Albert Ellis",
        "True love is not a strong, fiery, impetuous passion. It is, on the contrary, an element calm and deep. It looks beyond mere externals, and is attracted by qualities alone. It is wise and discriminating, and its devotion is real and abiding. - Ellen G. White",
        "Love is the only force capable of transforming an enemy into a friend. - Martin Luther King, Jr.",
        "Love is when you meet someone who tells you something new about yourself. - André Breton",
        "The supreme happiness of life is the conviction that we are loved. - Victor Hugo",
        "Love is a better teacher than duty. - Albert Einstein",
        "Life without love is like a tree without blossoms or fruit. - Khalil Gibran",
        "Love is the flower you’ve got to let grow. - John Lennon",
        "Love and compassion are necessities, not luxuries. Without them, humanity cannot survive. - Dalai Lama",
        "Love is not just looking at each other, it’s looking in the same direction. - Antoine de Saint-Exupéry",
        "The giving of love is an education in itself. - Eleanor Roosevelt",
        "Love is not what the mind thinks, but what the heart feels. - Greg Evans",
        "Love is the answer, and you know that for sure. - John Lennon",
        "Love will find a way through paths where wolves fear to prey. - Lord Byron",
        "To love and be loved is to feel the sun from both sides. - David Viscott"
      ],
    success: [
        "Success is not final; failure is not fatal: It is the courage to continue that counts. – Winston S. Churchill",
        "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
        "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
        "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
        "Success is walking from failure to failure with no loss of enthusiasm. – Winston S. Churchill",
        "Opportunities don't happen, you create them. – Chris Grosser",
        "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
        "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
        "Success is the sum of small efforts, repeated day-in and day-out. – Robert Collier",
        "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
        "Success is not in what you have, but who you are. – Bo Bennett",
        "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
        "The secret of success is to do the common thing uncommonly well. – John D. Rockefeller Jr.",
        "Success depends upon previous preparation, and without such preparation, there is sure to be failure. – Confucius",
        "Success is a state of mind. If you want success, start thinking of yourself as a success. – Joyce Brothers",
        "Strive not to be a success, but rather to be of value. – Albert Einstein",
        "I attribute my success to this: I never gave or took any excuse. – Florence Nightingale",
        "Success is how high you bounce when you hit bottom. – George S. Patton",
        "In order to succeed, your desire for success should be greater than your fear of failure. – Bill Cosby",
        "Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. – Zig Ziglar",
        "The way to get started is to quit talking and begin doing. – Walt Disney",
        "Success is liking yourself, liking what you do, and liking how you do it. – Maya Angelou",
        "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
        "Success isn't about the end result, it's about what you learn along the way. – Vera Wang",
        "Success is the progressive realization of a worthy goal or ideal. – Earl Nightingale",
        "The difference between who you are and who you want to be is what you do. – Charles Duhigg",
        "Success is a journey, not a destination. – Arthur Ashe",
        "Success is achieved and maintained by those who try and keep trying. – W. Clement Stone",
        "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
        "Action is the foundational key to all success. – Pablo Picasso",
        "The key to success is to focus on goals, not obstacles. – Anonymous",
        "Success is the good fortune that comes from aspiration, desperation, perspiration, and inspiration. – Evan Esar",
        "Success is 1% inspiration, 99% perspiration. – Thomas Edison",
        "Success does not consist in never making mistakes but in never making the same one a second time. – George Bernard Shaw",
        "To succeed in life, you need two things: ignorance and confidence. – Mark Twain",
        "It always seems impossible until it’s done. – Nelson Mandela",
        "Success is a state of mind. You have to believe in yourself, or success won’t happen. – Steve Jobs",
        "If you want to achieve greatness stop asking for permission. – Anonymous",
        "Successful people do what unsuccessful people are not willing to do. – Jim Rohn",
        "Your time is limited, don't waste it living someone else’s life. – Steve Jobs",
        "The successful warrior is the average man, with laser-like focus. – Bruce Lee",
        "Success is finding satisfaction in giving a little more than you take. – Christopher Reeve",
        "Success is often achieved by those who don't know that failure is inevitable. – Coco Chanel",
        "Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds. – Orison Swett Marden",
        "Failure is success in progress. – Albert Einstein",
        "Success is getting what you want, happiness is wanting what you get. – W.P. Kinsella",
        "The harder the battle, the sweeter the victory. – Les Brown",
        "Success is how well you can live with yourself when others don’t believe in you. – Anonymous",
        "The path to success is to take massive, determined action. – Tony Robbins",
        "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it. – Barack Obama",
        "Success comes from knowing that you did your best to become the best that you are capable of becoming. – John Wooden",
        "Success is stumbling from failure to failure with no loss of enthusiasm. – Winston Churchill",
        "Success is not about being the best. It's about always getting better. – Behdad Sami",
        "Success is dependent on effort. – Sophocles",
        "Your success and happiness lie in you. – Helen Keller",
        "Patience, persistence, and perspiration make an unbeatable combination for success. – Napoleon Hill",
        "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome. – Booker T. Washington",
        "Success is a lousy teacher. It seduces smart people into thinking they can't lose. – Bill Gates",
        "The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand. – Vince Lombardi",
        "The only real success is the one that lasts. – Richelle E. Goodrich",
        "The most successful people are those who are good at plan B. – James Yorke",
        "Success is about making a difference in someone else’s life. – Anonymous",
        "To be successful, you have to have your heart in your business, and your business in your heart. – Thomas Watson Sr.",
        "Success is not the result of spontaneous combustion. You must set yourself on fire. – Arnold H. Glasow",
        "Success is when preparation meets opportunity. – Zig Ziglar",
        "Success is knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others. – John C. Maxwell",
        "Success is doing ordinary things extraordinarily well. – Jim Rohn",
        "If you can dream it, you can do it. – Walt Disney",
        "The secret of your success is determined by your daily agenda. – John C. Maxwell",
        "Success consists of going from failure to failure without loss of enthusiasm. – Winston Churchill",
        "You may only succeed if you desire succeeding; you may only fail if you do not mind failing. – Philippos",
        "Success is simply a matter of doing what you do best and not worrying about what others are doing. – John Wooden",
        "The best revenge is massive success. – Frank Sinatra",
        "Success is not in what you have, but who you are. – Bo Bennett",
        "Success is making the most of your abilities. – Zig Ziglar",
        "The best way to succeed in this world is to act on the advice you give to others. – Anonymous",
        "The successful man is the one who finds out what is the matter with his business before his competitors do. – Roy L. Smith",
        "Success is a matter of luck, just ask any failure. – Earl Wilson",
        "Success is getting what you want. Happiness is wanting what you get. – Dale Carnegie",
        "Success is living up to your potential. That’s all. Wake up with a smile and go after life. – Joe Kapp",
        "Success is the fruit of good ideas pursued with energy, intelligence, and determination. – Thomas J. Watson",
        "Success is falling nine times and getting up ten. – Jon Bon Jovi",
        "Success is a lousy teacher. It seduces smart people into thinking they can't lose. – Bill Gates"
    ],
    life:[
        "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
        "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
        "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
        "Life is really simple, but we insist on making it complicated. - Confucius",
        "The most important thing is to enjoy your life—to be happy—it's all that matters. - Audrey Hepburn",
        "Life is ten percent what happens to us and ninety percent how we react to it. - Charles R. Swindoll",
        "Good friends, good books, and a sleepy conscience: this is the ideal life. - Mark Twain",
        "Life is short, and it is up to you to make it sweet. - Sarah Louise Delany",
        "Life’s tragedy is that we get old too soon and wise too late. - Benjamin Franklin",
        "Life is either a daring adventure or nothing at all. - Helen Keller",
        "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
        "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
        "Turn your wounds into wisdom. - Oprah Winfrey",
        "Life is too important to be taken seriously. - Oscar Wilde",
        "Difficulties in life are intended to make us better, not bitter. - Dan Reeves",
        "The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey",
        "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
        "Don’t count the days, make the days count. - Muhammad Ali",
        "Life is about making an impact, not making an income. - Kevin Kruse",
        "We do not remember days, we remember moments. - Cesare Pavese",
        "Life is a journey that must be traveled no matter how bad the roads and accommodations. - Oliver Goldsmith",
        "Life is a question and how we live it is our answer. - Gary Keller",
        "The only impossible journey is the one you never begin. - Tony Robbins",
        "Challenges are what make life interesting; overcoming them is what makes life meaningful. - Joshua J. Marine",
        "It is not the length of life, but depth of life. - Ralph Waldo Emerson",
        "Keep smiling, because life is a beautiful thing and there's so much to smile about. - Marilyn Monroe",
        "Life shrinks or expands in proportion to one’s courage. - Anais Nin",
        "To succeed in life, you need two things: ignorance and confidence. - Mark Twain",
        "The more you praise and celebrate your life, the more there is in life to celebrate. - Oprah Winfrey",
        "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
        "You only live once, but if you do it right, once is enough. - Mae West",
        "Believe that life is worth living and your belief will help create the fact. - William James",
        "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
        "Life is not measured by the number of breaths we take, but by the moments that take our breath away. - Maya Angelou",
        "Life is a series of natural and spontaneous changes. Don’t resist them; that only creates sorrow. Let reality be reality. - Lao Tzu",
        "Life is 10% what happens to me and 90% of how I react to it. - Charles R. Swindoll",
        "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
        "The best way to predict your future is to create it. - Abraham Lincoln",
        "Do what you can, with what you have, where you are. - Theodore Roosevelt",
        "Success is how high you bounce when you hit bottom. - George S. Patton",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "Life is a long lesson in humility. - James M. Barrie",
        "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
        "You have to dream before your dreams can come true. - A.P.J. Abdul Kalam",
        "Live in the sunshine, swim in the sea, drink the wild air. - Ralph Waldo Emerson",
        "Life is really generous to those who pursue their personal legend. - Paulo Coelho",
        "Life is a succession of lessons which must be lived to be understood. - Helen Keller",
        "Everything has beauty, but not everyone sees it. - Confucius",
        "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
        "He who has a why to live can bear almost any how. - Friedrich Nietzsche",
        "The secret of life, though, is to fall seven times and to get up eight times. - Paulo Coelho",
        "Life itself is the most wonderful fairy tale. - Hans Christian Andersen",
        "Life is made of ever so many partings welded together. - Charles Dickens",
        "Life is too important to be taken seriously. - Oscar Wilde",
        "The good life is one inspired by love and guided by knowledge. - Bertrand Russell",
        "Where there is love, there is life. - Mahatma Gandhi",
        "The unexamined life is not worth living. - Socrates",
        "Live for each second without hesitation. - Elton John",
        "Life is short, and truth works far and lives long: let us then speak the truth. - Arthur Schopenhauer",
        "If you love life, don't waste time, for time is what life is made up of. - Bruce Lee",
        "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor. - Sholom Aleichem",
        "The greatest pleasure of life is love. - Euripides",
        "Life belongs to the living, and he who lives must be prepared for changes. - Johann Wolfgang von Goethe",
        "To live is to suffer, to survive is to find some meaning in the suffering. - Friedrich Nietzsche",
        "Life is not a problem to be solved, but a reality to be experienced. - Søren Kierkegaard",
        "An unexamined life is not worth living. - Socrates",
        "Life is a daring adventure or nothing at all. - Helen Keller",
        "Life has no limitations, except the ones you make. - Les Brown",
        "Life is short, live it. Love is rare, grab it. Anger is bad, dump it. Fear is awful, face it. Memories are sweet, cherish them. - Unknown",
        "Life becomes easier when you learn to accept the apology you never got. - R. Brault",
        "The longer I live, the more I realize the impact of attitude on life. - Charles R. Swindoll",
        "Life is like a coin. You can spend it any way you wish, but you only spend it once. - Lillian Dickson",
        "Life is a flower of which love is the honey. - Victor Hugo",
        "The art of life is to know how to enjoy a little and to endure very much. - William Hazlitt",
        "In the book of life, the answers aren’t in the back. - Charlie Brown",
        "Life isn’t about waiting for the storm to pass, it’s about learning to dance in the rain. - Vivian Greene",
        "When we do the best we can, we never know what miracle is wrought in our life or in the life of another. - Helen Keller",
        "The purpose of life is a life of purpose. - Robert Byrne",
        "Only a life lived for others is a life worthwhile. - Albert Einstein",
        "The good life is one inspired by love and guided by knowledge. - Bertrand Russell",
        "Life is either a daring adventure or nothing at all. - Helen Keller",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
        "Life isn’t about getting and having, it’s about giving and being. - Kevin Kruse",
        "A happy life consists in tranquility of mind. - Cicero",
        "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
        "Live life to the fullest, and focus on the positive. - Matt Cameron"
      ],
    story:["what are required to predict the cancer results based on infrared images???Predicting cancer results based on infrared images involves several steps that typically fall under the broader category of medical imaging analysis using machine learning or deep learning techniques. Here's a breakdown of the key components and requirements for such a task"
    ]

};
// Function to generate quote based on keyword
function genQuote() {
    const keyword = document.getElementById("keyword").value.toLowerCase();
    const quoteBox = document.getElementById("quote-box");
    
    // Show the loading ring
    quoteBox.innerHTML = '<div class="progress-ring"></div>';
    // After 2 seconds, generate and display a quote
    setTimeout(() => {
        if (quotes[keyword]) {
            // Get random quote from the matched keyword category
            const randomQuote = quotes[keyword][Math.floor(Math.random() * quotes[keyword].length)];
            quoteBox.innerText = randomQuote;
        }
      
         else{
            // Show message if no quotes found for the keyword
            quoteBox.innerText = "No quotes found for this keyword.";
        }
        if(keyword==0){
            alert("please enter keyword");
            quoteBox.innerText="please enter a valid keyword from the list "
        }
        // Remove the loading ring and display the quote
        quoteElement.textContent = randomQuote;
        quoteBox.innerHTML = ""; // Clear progress ring
        //quoteBox.appendChild(quoteElement); // Add the new quote
    }, 300);
}

   