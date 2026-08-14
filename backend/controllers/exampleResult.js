/*
all — Search across all media types
movie — Movies and film content
podcast — Podcasts
music — Music tracks (songs)
musicVideo — Music videos
audiobook — Audiobooks
shortFilm — Short films
tvShow — TV shows / episodes
software — Apps / software (App Store)
ebook — Books (iBooks)
*/

const result = {
  resultCount: 10,
  results: [
    {
      wrapperType: "track",
      kind: "feature-movie",
      trackId: 353421214,
      artistName: "Jeremiah Chechik",
      trackName: "The Avengers (1998)",
      trackCensoredName: "The Avengers (1998)",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/the-avengers-1998/id353421214?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video122/v4/47/0a/8d/470a8d4f-0ca0-ab45-4ff5-9b786cd62294/mzvf_4492718468637948558.640x476.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Video/c7/04/0c/mzi.nhpobmzt.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Video/c7/04/0c/mzi.nhpobmzt.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Video/c7/04/0c/mzi.nhpobmzt.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 9.99,
      trackRentalPrice: 3.99,
      collectionHdPrice: 9.99,
      trackHdPrice: 9.99,
      trackHdRentalPrice: 3.99,
      releaseDate: "1998-08-14T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      trackTimeMillis: 5362820,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Action & Adventure",
      contentAdvisoryRating: "PG-13",
      longDescription:
        "Based on the sophisticated, quirky British secret-agent television series of the 1960s. A scientist who develops the means to control large-scale weather changes uses his discovery to wreak evil. Emma Peel and John Steed must stop the villain.",
    },
    {
      wrapperType: "track",
      kind: "tv-episode",
      artistId: 877820093,
      collectionId: 919255162,
      trackId: 1023108656,
      artistName: "Marvel's Avengers Assemble",
      collectionName: "Marvel's Avengers Assemble, Season 2",
      trackName: "Avengers Last Stand",
      collectionCensoredName: "Marvel's Avengers Assemble, Season 2",
      trackCensoredName: "Avengers Last Stand",
      artistViewUrl:
        "https://itunes.apple.com/us/tv-show/marvels-avengers-assemble/id877820093?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/tv-season/avengers-last-stand/id919255162?i=1023108656&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/tv-season/avengers-last-stand/id919255162?i=1023108656&uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video122/v4/56/67/dc/5667dcea-356f-30aa-ff0c-ef2d438d45fe/mzvf_437566323867501617.640x480.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Video/v4/d0/4f/73/d04f73a5-92f6-effe-c7c4-c3d5eb90f5b6/mzl.zyuccnxp.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Video/v4/d0/4f/73/d04f73a5-92f6-effe-c7c4-c3d5eb90f5b6/mzl.zyuccnxp.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Video/v4/d0/4f/73/d04f73a5-92f6-effe-c7c4-c3d5eb90f5b6/mzl.zyuccnxp.lsr/100x100bb.jpg",
      collectionPrice: 29.99,
      trackPrice: 2.99,
      collectionHdPrice: 39.99,
      trackHdPrice: 2.99,
      releaseDate: "2015-07-26T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 26,
      trackNumber: 23,
      trackTimeMillis: 1323405,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Animation",
      contentAdvisoryRating: "TV-Y7",
      shortDescription:
        "The Avengers are challenged by the fully formed and incredibly powerful Squadron Supreme for a",
      longDescription:
        "The Avengers are challenged by the fully formed and incredibly powerful Squadron Supreme for a battle that will end with only one team as the victor.",
    },
    {
      wrapperType: "track",
      kind: "tv-episode",
      artistId: 203193209,
      collectionId: 1680744371,
      trackId: 1686865625,
      artistName: "Robot Chicken",
      collectionName: "Robot Chicken, The Complete Series",
      trackName: "Season 11, Episode 2: May Cause Light Cannibalism",
      collectionCensoredName: "Robot Chicken, The Complete Series",
      trackCensoredName: "Season 11, Episode 2: May Cause Light Cannibalism",
      artistViewUrl:
        "https://itunes.apple.com/us/tv-show/robot-chicken/id203193209?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/tv-season/season-11-episode-2-may-cause-light-cannibalism/id1680744371?i=1686865625&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/tv-season/season-11-episode-2-may-cause-light-cannibalism/id1680744371?i=1686865625&uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video115/v4/b4/bd/41/b4bd415b-77cb-54a1-bd48-bccc07ffff29/mzvf_9583607539456840098.640x478.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/9a/09/f8/9a09f8cb-56d0-e7be-1e65-d061e7553df2/pr_source.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/9a/09/f8/9a09f8cb-56d0-e7be-1e65-d061e7553df2/pr_source.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/9a/09/f8/9a09f8cb-56d0-e7be-1e65-d061e7553df2/pr_source.lsr/100x100bb.jpg",
      collectionPrice: 99.99,
      trackPrice: 2.99,
      releaseDate: "2023-07-02T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 226,
      trackNumber: 202,
      trackTimeMillis: 680180,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Comedy",
      contentAdvisoryRating: "TV-MA",
      shortDescription:
        "The Gargoyles get as hard as stone if you know what Robot Chicken means; Solid Snake must master the",
      longDescription:
        "The Gargoyles get as hard as stone if you know what Robot Chicken means; Solid Snake must master the walk of shame; The Avengers learn to curb their enthusiasm.",
    },
    {
      wrapperType: "track",
      kind: "tv-episode",
      artistId: 877820093,
      collectionId: 1083243589,
      trackId: 1199682097,
      artistName: "Marvel's Avengers Assemble",
      collectionName: "Marvel's Avengers: Ultron Revolution, Season 3",
      trackName: "Civil War, Pt. 2: The Mighty Avengers",
      collectionCensoredName: "Marvel's Avengers: Ultron Revolution, Season 3",
      trackCensoredName: "Civil War, Pt. 2: The Mighty Avengers",
      artistViewUrl:
        "https://itunes.apple.com/us/tv-show/marvels-avengers-assemble/id877820093?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/tv-season/civil-war-pt-2-the-mighty-avengers/id1083243589?i=1199682097&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/tv-season/civil-war-pt-2-the-mighty-avengers/id1083243589?i=1199682097&uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video122/v4/80/a2/c3/80a2c37d-9c76-70dd-d515-d3953fde9647/mzvf_2242885716825267329.640x480.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Video/v4/0c/d1/71/0cd17188-07b5-05df-41c2-c0d2af29a972/mzl.gkjwviqh.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Video/v4/0c/d1/71/0cd17188-07b5-05df-41c2-c0d2af29a972/mzl.gkjwviqh.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Video/v4/0c/d1/71/0cd17188-07b5-05df-41c2-c0d2af29a972/mzl.gkjwviqh.lsr/100x100bb.jpg",
      collectionPrice: 29.99,
      trackPrice: 2.99,
      collectionHdPrice: 39.99,
      trackHdPrice: 2.99,
      releaseDate: "2017-01-28T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 26,
      trackNumber: 24,
      trackTimeMillis: 1323583,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Animation",
      contentAdvisoryRating: "TV-Y7",
      shortDescription:
        "With the Avengers disbanded, a new team - the Mighty Avengers - steps in to take their place",
      longDescription:
        "With the Avengers disbanded, a new team - the Mighty Avengers - steps in to take their place.",
    },
    {
      wrapperType: "audiobook",
      artistId: 532355324,
      collectionId: 1823937245,
      artistName: "Marvel Press & Steve Behling",
      collectionName: "Avengers: Endgame (Unabridged)",
      collectionCensoredName: "Avengers: Endgame (Unabridged)",
      artistViewUrl:
        "https://books.apple.com/us/author/marvel-press/id532355324?uo=4",
      collectionViewUrl:
        "https://books.apple.com/us/audiobook/avengers-endgame-unabridged/id1823937245?uo=4",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/9a/81/04/9a810455-2686-ab99-624f-5f36b0fe9aa6/9798217290949.d.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/9a/81/04/9a810455-2686-ab99-624f-5f36b0fe9aa6/9798217290949.d.jpg/100x100bb.jpg",
      collectionPrice: 14.99,
      collectionExplicitness: "cleaned",
      trackCount: 1,
      country: "USA",
      currency: "USD",
      releaseDate: "2025-08-05T07:00:00Z",
      primaryGenreName: "Kids & Young Adults",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9b/ad/c8/9badc826-5ca5-0485-77ec-238f3666c8f5/mzaf_1033037913004291851.std.aac.p.m4a",
      description:
        "After the devastating events of <i>Avengers: Infinity War<\/i>, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos’ actions and restore balance to the universe. Our beloved heroes will truly understand how fragile this reality is, and the sacrifices that must be made to uphold it. It is a story of friendship, teamwork, and setting aside our differences to overcome an immense obstacle.",
    },
    {
      wrapperType: "audiobook",
      artistId: 215353026,
      collectionId: 1637153518,
      artistName: "Greg Keyes & Marvel",
      collectionName: "Marvel's Avengers",
      collectionCensoredName: "Marvel's Avengers",
      artistViewUrl:
        "https://books.apple.com/us/author/greg-keyes/id215353026?uo=4",
      collectionViewUrl:
        "https://books.apple.com/us/audiobook/marvels-avengers/id1637153518?uo=4",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/db/7f/1a/db7f1a1e-71a4-6a54-e7d1-7bd846e6e676/9781666529371.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/db/7f/1a/db7f1a1e-71a4-6a54-e7d1-7bd846e6e676/9781666529371.jpg/100x100bb.jpg",
      collectionPrice: 12.99,
      collectionExplicitness: "cleaned",
      trackCount: 1,
      country: "USA",
      currency: "USD",
      releaseDate: "2022-02-08T08:00:00Z",
      primaryGenreName: "Fiction",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/64/25/3a/64253ad0-ddf3-e895-907e-ceea904b85a1/mzaf_3972876668462337516.std.aac.p.m4a",
      description:
        "Captain America, Iron Man, Thor, Black Widow, and the Hulk— Earth's Mightiest Heroes—have assembled to face world-class threats whenever and wherever they might appear. They are the Avengers. Yet some threats transcend the ages. Centuries ago, a never-before-seen group of heroes gathered as the Avengers of their ancient era to fight the Zodiac, foes who wielded unimaginable arcane energies channeled through a mysterious Key. The resulting battle devastated vast swaths of the planet. The Key was lost, and the Zodiac went into hiding, influencing world events from the shadows, waiting for the stars to align to usher in their return. When strange beings exhibiting the traits of the twelve astrological signs appear in the 21st century, the Avengers again answer the call to assemble. But when this modern team of heroes is forced to divide their efforts, each encounter leads to their opponents gaining strength. Once again, the hunt is on for the Extinction Key... and if the Avengers don't find it, our world will be lost.",
    },
    {
      wrapperType: "audiobook",
      artistId: 365489736,
      collectionId: 1455555326,
      artistName: "Liza Palmer",
      collectionName: "Avengers: Infinity War Destiny Arrives (Unabridged)",
      collectionCensoredName:
        "Avengers: Infinity War Destiny Arrives (Unabridged)",
      artistViewUrl:
        "https://books.apple.com/us/author/liza-palmer/id365489736?uo=4",
      collectionViewUrl:
        "https://books.apple.com/us/audiobook/avengers-infinity-war-destiny-arrives-unabridged/id1455555326?uo=4",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/16/43/5c/16435cce-6a34-8090-357d-2d4dab41525a/9780593152584.d.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/16/43/5c/16435cce-6a34-8090-357d-2d4dab41525a/9780593152584.d.jpg/100x100bb.jpg",
      collectionPrice: 12.99,
      collectionExplicitness: "cleaned",
      trackCount: 1,
      country: "USA",
      currency: "USD",
      releaseDate: "2019-04-02T07:00:00Z",
      primaryGenreName: "Kids & Young Adults",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/1b/6d/04/1b6d04a4-0afb-47d9-b4b9-1a65ea1a9ddc/mzaf_2668566870217403956.std.aac.p.m4a",
      description:
        "Relive the emotional and thrilling adventures from the film Avengers: Infinity War, complete with original illustrations that bring this tale to life right on the cusp of the release of Avengers: Endgame, the film that will see the culmination of every significant event in the Marvel Cinematic Universe.",
    },
    {
      wrapperType: "audiobook",
      artistId: 398285954,
      collectionId: 1637102574,
      artistName: "James A. Moore & Marvel",
      collectionName: "Avengers",
      collectionCensoredName: "Avengers",
      artistViewUrl:
        "https://books.apple.com/us/author/james-a-moore/id398285954?uo=4",
      collectionViewUrl:
        "https://books.apple.com/us/audiobook/avengers/id1637102574?uo=4",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/6f/c6/40/6fc640b0-a7de-2493-1c2c-4185a4e59162/9781666585506.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/6f/c6/40/6fc640b0-a7de-2493-1c2c-4185a4e59162/9781666585506.jpg/100x100bb.jpg",
      collectionPrice: 12.99,
      collectionExplicitness: "cleaned",
      trackCount: 1,
      country: "USA",
      currency: "USD",
      releaseDate: "2020-10-15T07:00:00Z",
      primaryGenreName: "Fiction",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/f0/02/eb/f002eb16-a18e-32a6-0484-a8645f8be298/mzaf_3484631934966909921.std.aac.p.m4a",
      description:
        "The Avengers journey into deep space, where they unite the intergalactic races against the Builders—deadly aliens who seek to destroy the known galaxy. While the heroes are gone, Thanos sets his sights on Earth, sending the Black Order to launch the assault. It falls to the other heroes of Earth—the Inhumans, the Black Panther, Namor the Sub-Mariner, Doctor Strange, the X-Men, and more—to defend Attilan, Wakanda, Atlantis, and the rest of the planet. To defeat Thanos, the defending forces will need to deploy a new weapon—one that may be as deadly as the invading force.",
    },
    {
      wrapperType: "audiobook",
      artistId: 532355324,
      collectionId: 1823937013,
      artistName: "Marvel Press",
      collectionName: "Avengers Storybook Collection (Unabridged)",
      collectionCensoredName: "Avengers Storybook Collection (Unabridged)",
      artistViewUrl:
        "https://books.apple.com/us/author/marvel-press/id532355324?uo=4",
      collectionViewUrl:
        "https://books.apple.com/us/audiobook/avengers-storybook-collection-unabridged/id1823937013?uo=4",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d4/48/b5/d448b55d-caa8-643a-e864-0f4f6c58fe51/9798217290932.d.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d4/48/b5/d448b55d-caa8-643a-e864-0f4f6c58fe51/9798217290932.d.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      collectionExplicitness: "cleaned",
      trackCount: 1,
      country: "USA",
      currency: "USD",
      releaseDate: "2025-08-05T07:00:00Z",
      primaryGenreName: "Kids & Young Adults",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d3/b5/5f/d3b55faa-f284-0d59-7e88-6f8f2d3029da/mzaf_603653924543558561.std.aac.p.m4a",
      description:
        "<b>Two Marvel storybook collections in one volume!<br /><\/b><br /><i><b>Avengers Storybook Collection<\/b><br /><\/i>Join your favorite Avengers and their friends as they unite to battle foes no single hero could withstand! Defeat an ancient beast with Thor, journey to Wakanda with Black Panther, travel back in time with Iron Man, and more. This thrilling collection brings the epic power of the expanding Marvel Universe to life!<br /><br /><b>Selected stories from <\/b><i><b>Marvel Super Heroes Storybook Collection<\/b><br /><\/i>Super Heroes lead very exciting lives protecting innocent people from cunning villains. But how did they get these super powers? With stories on the She-Hulk, Ant-Man, Iron Man, and other beloved characters, the selected stories in this collection will bring listeners back to the beginning, while captivating them with incredible tales and exciting battles.",
    },
    {
      wrapperType: "audiobook",
      artistId: 504480102,
      collectionId: 1637163820,
      artistName: "David Michelinie & Marvel",
      collectionName: "The Avengers",
      collectionCensoredName: "The Avengers",
      artistViewUrl:
        "https://books.apple.com/us/author/david-michelinie/id504480102?uo=4",
      collectionViewUrl:
        "https://books.apple.com/us/audiobook/the-avengers/id1637163820?uo=4",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/63/51/26/63512648-2a65-02dc-147a-735c4787d151/9781666529715.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/63/51/26/63512648-2a65-02dc-147a-735c4787d151/9781666529715.jpg/100x100bb.jpg",
      collectionPrice: 12.99,
      collectionExplicitness: "cleaned",
      trackCount: 1,
      country: "USA",
      currency: "USD",
      releaseDate: "2022-02-17T08:00:00Z",
      primaryGenreName: "Fiction",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/e4/bf/08/e4bf082c-9b0c-e786-c328-6cee4f15ae28/mzaf_7778684927997032451.std.aac.p.m4a",
      description:
        "Iron Man, Thor, Vision, The Beast, Quicksilver, and The Scarlet Witch band together to save the life of Captain America, the living legend of World War II! Travel with these six sensational heroes two thousand years into the future as they come face-to-face with the unimaginable villainy of Kang the Conquerer, a descendant of Dr. Doom who is determined to be rid of Captain America—for good.",
    },
  ],
};
