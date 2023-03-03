const data = [
    // {
    //     projectId: "coding-coffee",
    //     title: "Coding Coffee : Cafe Menu Catalogue",
    //     year: "2022",
    //     overview: "...",
    //     tech: "Kotlin, MVVM, Clean-Architecture, Dependency Injection",
    //     image: [
    //         "...",
    //         "..."
    //     ],
    //     roles: "...",
    //     sneakPeak: "...",
    // },
    {
        projectId: "insul-in",
        title: "Insul.in : Early Diabetes Detection Apps",
        year: "2022",
        overview: `<p class="project-overview-text">Insul.in is Developed apps made by Bangkit Academy 2022 Team to give impact on Medical Issue. In Insul.in you can check initial screening of the potential risk of Diabetes with answering several question (combined with Machine Learning) to prevents worst condition based the result.
    </p>`,
        tech: "Kotlin, MVVM, Firebase, Google Maps API, Lottie Files, Retrofit, Google Console Project",
        techStack: "android",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/apriantosi.appspot.com/o/apriantoa917.github.io%2Fprojects%2Finsul-in%2Fthumbnail.jpg?alt=media&token=e999f937-0ed6-4917-9764-91df9d015785",
        image: [
            "https://user-images.githubusercontent.com/47800225/173065444-e2e1636f-5052-40b2-b204-d85d8bca50fd.png",
            "https://user-images.githubusercontent.com/47800225/173065409-04795ac4-583c-437f-afb5-e9a0189a9d9a.png",
        ],
        roles: "Android Developer",
        sneakPeak: `<p>See Repository at
            <a href="https://github.com/Insulin-bangkit-2022"><i class="bi bi-github"></i>
                Github</a>
        </p>,`,
    },
    {
        projectId: "picnicker-food-voucher",
        title: "Picnicker : Culinary Voucher Apps",
        year: "2022",
        overview: `<p class="project-overview-text">Picnicker is a prototype application for culinary vouchers that helps users to find various food promos and makes it easier for them to buy culinary vouchers online. This project is related to Dicoding Course
        <b><a href="https://www.dicoding.com/academies/335">"Belajar Dasar UX Design"</a></b> as final submission
    </p>`,
        tech: "Figma, Prototyping, UX Research",
        techStack: "design",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/apriantosi.appspot.com/o/apriantoa917.github.io%2Fprojects%2Fpicnicker-food-voucher%2Fthumbnail.jpg?alt=media&token=254fb09e-4a62-4744-b36b-db2f63044a1a",
        image: ["https://www.dropbox.com/s/nhpz5gdnnnhs5q8/Picnicker.png?raw=1"],
        roles: "UI / UX Designer",
        sneakPeak: `<p>Play prototype at
        <a href="https://www.figma.com/proto/iPHFZztIOa1hT3MOTeBaFb/Dicoding-UX-Research?node-id=76%3A1068&viewport=241%2C48%2C0.23&scaling=scale-down&starting-point-node-id=76%3A1119"><i
                class="bi bi-play-circle"></i>
            Figma</a> | See the documentation at
        <a href="https://aprianto.notion.site/Dicoding-UX-Design-Submission-d346172789f34ebc83c3415b7c909ba7"><i
                class="bi bi-eye"></i>
            Notion</a>
    </p>`,
    },
    {
        projectId: "dico-story",
        title: "Dico Story : Dicoding User Story",
        year: "2022",
        overview: `<p class="project-overview-text">Dico Story is an Dicoding's social media applications. You can create account then use the app for share your moments on application, you also can get the latest story (updates) from another user. This project is related to Dicoding Course
        <b><a href="https://www.dicoding.com/academies/352">"Belajar Pengembangan Aplikasi Android
                Intermediate"</a></b> as final submission</p>`,
        tech: "Kotlin, Retrofit2 Library, Remote Mediator & Paging3 (Offline-Online Mechanism & Infinite Scroll data, like instagram), LottieFiles (Animation), Google Maps API",
        techStack: "android",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/apriantosi.appspot.com/o/apriantoa917.github.io%2Fprojects%2Fdico-story%2Fthumbnail.jpg?alt=media&token=639567ca-15d4-45a0-b7a3-7b32d59f01fd",
        image: ["https://www.dropbox.com/s/vosrq0gxt1atcwu/Dico%20Story.png?raw=1"],
        roles: "Fullstack Engineer",
        sneakPeak: `<p>See Repository at
        <a href="https://github.com/apriantoa917/android-dicoding-BPAAI"><i class="bi bi-github"></i>
            Github</a>
    </p>`,
    },
    {
        projectId: "my-github",
        title: "My Github : Github User Search Apps",
        year: "2022",
        overview: `<p class="project-overview-text">My Github is a github user search app developed using Github API to retrieve user search & user info details. In app you can like specific user locally & you can change theme appereance. This project is related to Dicoding Course <b><a href="https://www.dicoding.com/academies/14">"Belajar
        Fundamental Aplikasi Android (BFAA)"</a></b> as final submission</p>`,
        tech: "Kotlin, Retrofit2 Library, Room Database (liked user), Data Store (theme appereance)",
        techStack: "android",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/apriantosi.appspot.com/o/apriantoa917.github.io%2Fprojects%2Fmy-github%2Fthumbnail.jpg?alt=media&token=5e35867c-991c-4fff-a7fc-a170af21d0cd",
        image: ["https://www.dropbox.com/s/g7ysfs8wp1cvngc/My%20Github.png?raw=1"],
        roles: "Fullstack Engineer",
        sneakPeak: `<p>See Repository at
        <a href="https://github.com/apriantoa917/android-dicoding-BFAA"><i class="bi bi-github"></i>
            Github</a>
    </p>`,
    },
    {
        projectId: "angket-aak",
        title: "Angket AAK : Academic Service (BAAK) assessment website",
        year: "2021",
        overview: `<p class="project-overview-text">Angket is a website for the BAAK Dinamika University assessment to assess the services provided to students in Universitas Dinamika. This project is related to my internship in pursuing my undergraduate B.Tech studies
        </p>`,
        tech: "Laravel 8, PHP, MySQL",
        techStack: "website",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/apriantosi.appspot.com/o/apriantoa917.github.io%2Fprojects%2Fangket-aak%2Fthumbnail.jpg?alt=media&token=f5820cc4-0c23-451c-b995-447ce0c23a73",
        image: [
            "https://www.dropbox.com/s/p0m1v3nx6cbckkr/Screenshot%202022-03-26%20061650.png?raw=1",
            "https://www.dropbox.com/s/qkqxhk70w4n9i7f/Screenshot%202022-03-26%20061545.png?raw=1",
            "https://www.dropbox.com/s/6s9add5xfma34s5/Screenshot%202022-03-26%20061725.png?raw=1",
            "https://www.dropbox.com/s/7rdlnth274ba378/Screenshot%202022-03-26%20061358.png?raw=1",
            "https://www.dropbox.com/s/4va8t02yt883xe8/Screenshot%202022-03-26%20061418.png?raw=1",
        ],
        roles: "Fullstack Engineer",
        sneakPeak: `<p>See website at
        <a href="https://angketaak.dinamika.ac.id/"><i class="bi bi-link-45deg"></i>
            Website Angket AAK</a>
    </p>`,
    },
    {
        projectId: "mb-store-apps",
        title: "Mitra Bangunan Store : E-commerce building materials",
        year: "2021",
        overview: `<p class="project-overview-text">Mitra Building Store is an e-commerce development project for building materials using a webview display from an existing website and additional login and push notification features related to user accounts.
        </p>`,
        tech: "Webview Application, Firebase Cloud Messaging",
        techStack: "android",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/apriantosi.appspot.com/o/apriantoa917.github.io%2Fprojects%2Fmb-store-apps%2Fthumbnail.jpg?alt=media&token=009d9943-4d02-42fc-b120-b0b22c2ca3ba",
        image: ["https://www.dropbox.com/s/1ykd223j5j4wajr/MB%20STORE.png?raw=1"],
        roles: `<p>
        <ul>
            <li>Develop Login feature (handle login with native android and API)</li>
            <li>Develop Webview apps from existing website (with customized layouts)</li>
            <li>Develop Push Notification feature in application related with webview apps with FCM</li>
        </ul>
    </p>`,
        sneakPeak: `<p>See Apps at
        <a href="https://play.google.com/store/apps/details?id=com.mitrabangunan.mitrabangunanstore"><i
                class="bi bi-shop"></i>
            Playstore</a>
    </p>`,
    },
    {
        projectId: "si-dedi",
        title: "Si Dedi : Sistem Informasi Deteksi dini Diabetes",
        year: "2020",
        overview: `<p class="project-overview-text">Si Dedi is an android application for early detection of diabetes using the Naive Bayes Classification (NBC) method based on several symptoms experienced by the user. This project is related to the decision support system course (SPK)
        using a classification system</p>`,
        tech: "Java, Retfrofit, Firebase Realtime Database (Article list)",
        techStack: "android",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/apriantosi.appspot.com/o/apriantoa917.github.io%2Fprojects%2Fsi-dedi%2Fthumbnail.jpg?alt=media&token=ffc3d079-4a2c-4255-b0f7-88bfe6c97d88",
        image: [
            "https://www.dropbox.com/s/sq31nmtepcsyh13/banner_mobile.png?raw=1",
        ],
        roles: "Android Developer",
        sneakPeak: `<p>See Repository at
        <a href="https://github.com/apriantoa917/android-UAS_SPK-SiDeDi"><i class="bi bi-github"></i>
            Github</a>
    </p>`,
    },
    {
        projectId: "itung-ip",
        title: "Itung IP: GPA Calculator",
        year: "2020",
        overview: `<p class="project-overview-text">Itung IP is a GPA Calculator that developed to help my college friends project their IP (Indeks Prestasi). Itung IP apps allow user to save their score then the apps will automatically generate their IP, and user data will synced across
        user google account.</p>`,
        tech: "Java, Firebase Auth (login with Google), Firebase Realtime Database (Store data), Firebase Cloud Messaging",
        techStack: "android",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/apriantosi.appspot.com/o/apriantoa917.github.io%2Fprojects%2Fitung-ip%2Fthumbnail.jpg?alt=media&token=8a447093-3bd3-4bbd-93b3-5ba8d8c6a333",
        image: [
            "https://www.dropbox.com/s/jiiuoy756h0y4w1/Artboard%20%E2%80%93%202.png?raw=1",
        ],
        roles: "Android Developer",
        sneakPeak: `<p>See Repository at
        <a href="https://github.com/apriantoa917/android-itung_IP"><i class="bi bi-github"></i>
            Github</a>
    </p>`,
    },
    {
        projectId: "bookookoo",
        title: "BooKooKoo : Bookstore Preview Android Apps",
        year: "2019",
        overview: `<p class="project-overview-text">BooKooKoo is an application to display a list and details of a book as well as a list of books relevant to the book. This is my first android application and is a submission of the dicoding course <b><a href="https://www.dicoding.com/academies/51">"Belajar Membuat Aplikasi Android untuk
        Pemula"</a></b>.</p>`,
        tech: "Java, RecyclerView",
        techStack: "android",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/apriantosi.appspot.com/o/apriantoa917.github.io%2Fprojects%2Fbookookoo%2Fthumbnail.jpg?alt=media&token=f9a7ea44-25f4-4332-a23b-86f550221c4c",
        image: ["https://www.dropbox.com/s/f15vr8mp83wkci4/BooKooKoo.png?raw=1"],
        roles: "Android Developer",
        sneakPeak: `<p>See Repository at
        <a href="https://github.com/apriantoa917/Android-BooKooKoo"><i class="bi bi-github"></i>
            Github</a>
    </p>`,
    },
    {
        projectId: "katrol",
        title: `Katrol : <span style="font-weight: 900; text-decoration: underline;">KAT</span>eRing <span style="font-weight: 900;text-decoration: underline">O</span>n<span style="font-weight: 900;text-decoration: underline">L</span>ine (Online Food Catering)`,
        year: "2019",
        overview: `<p class="project-overview-text">Katrol is a prototype of an online catering order application that helps you to order catering from various food catering services. The concept helps you busy workers or first-time users looking for online catering for your event</p>`,
        tech: "Adobe XD, Prototyping",
        techStack: "design",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/apriantosi.appspot.com/o/apriantoa917.github.io%2Fprojects%2Fkatrol%2Fthumbnail.jpg?alt=media&token=320b7db2-822b-4d2b-83c8-c9b1b51ee7eb",
        image: ["https://www.dropbox.com/s/gnu91uhvdxwoxof/KATROL.png?raw=1"],
        roles: "UI / UX Designer",
        sneakPeak: `<p>Play prototype at
        <a href="https://xd.adobe.com/view/61a9345f-8701-49fb-4d2a-cb9b8bf1099e-1798/screen/977db440-e72e-4815-aea8-8d9c2b14beb0/?fullscreen"><i
                class="bi bi-play-circle"></i>
            Adobe XD</a>
    </p>`,
    },
    // {
    //     projectId: "...",
    //     title: "...",
    //     year: "...",
    //     overview: "...",
    //     tech: "...",
    //     image: [
    //         "...",
    //         "..."
    //     ],
    //     roles: "...",
    //     sneakPeak: "...",
    // },
];