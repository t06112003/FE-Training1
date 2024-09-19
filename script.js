const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cd = $('.cd');
const playlist = $('.playlist');
const song = $('.song');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const player = $('.player');
const repeatBtn = $('.btn-repeat');
const preBtn = $('.btn-prev');
const playBtn = $('.btn-toggle-play');
const nextBtn = $('.btn-next');
const randomBtn = $('.btn-random');
const progressBar = $('.progress');
const dashboard = $('.dashboard');

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeated: false,
    isDashboardFocused: false,
    playedIndexes: [],
    songs: [
        {
            name: "Usagi Flap",
            singer: "Blue Archive",
            path: "https://res.cloudinary.com/dslzbnfu8/video/upload/v1691057482/samples/sound/Usagi_Flap.mp3",
            image: "https://static.miraheze.org/bluearchivewiki/0/0f/Arisu.png?version=8fe2ae44d97dabab9a4d147a3bbd158c"
        },
        {
            name: "Ghost City Tokyo",
            singer: "Ayase",
            path: "https://res.cloudinary.com/dslzbnfu8/video/upload/v1693831697/samples/sound/GhostCityTokyo.mp3",
            image: "https://i.scdn.co/image/ab67616d0000b27373dc049bf21ac7ba3ab8e355"
        },
        {
            name: "Lobotomy Corporation OST Second Warning",
            singer: "Apocalypse",
            path: "https://res.cloudinary.com/dslzbnfu8/video/upload/v1691570516/samples/sound/LobotomyCorporationOSTSecondWarning.mp3",
            image: "https://fontmeme.com/images/lobcorp-logo-font.png"
        },
        {
            name: "Crisis Theme",
            singer: "Dog",
            path: "https://res.cloudinary.com/dslzbnfu8/video/upload/v1691570513/samples/sound/CourageTheCowardlyDogOSTCrisisTheme.mp3",
            image: "https://i1.sndcdn.com/artworks-jed24yeHGhe9LXDz-ZRaA5A-t1080x1080.jpg"
        },
        {
            name: "Trước Khi Em Tồn Tại",
            singer: "Thắng Nghẹo",
            path: "https://res.cloudinary.com/dslzbnfu8/video/upload/v1716534542/samples/Durify/Tr%C6%B0%E1%BB%9Bc_Khi_Em_T%E1%BB%93n_T%E1%BA%A1i.mp3",
            image: "https://res.cloudinary.com/dslzbnfu8/image/upload/v1716534548/samples/Durify/C%C3%A1i_%C4%90%E1%BA%A7u_Ti%C3%AAn.jpg"
        },
        {
            name: "Thấy Chưa",
            singer: "Ngọt",
            path: "https://res.cloudinary.com/dslzbnfu8/video/upload/v1716556970/samples/Durify/Th%E1%BA%A5y_Ch%C6%B0a.mp3",
            image: "https://res.cloudinary.com/dslzbnfu8/image/upload/v1716556973/samples/Durify/Gieo.jpg"
        },
        {
            name: "Vitality",
            singer: "Mittsies",
            path: "https://res.cloudinary.com/dslzbnfu8/video/upload/v1716569744/samples/Durify/Vitality_yenlx6.mp3",
            image: "https://res.cloudinary.com/dslzbnfu8/image/upload/v1716569764/samples/Durify/HellTaker_q9gia9.jpg"
        },
        {
            name: "NIGHT DANCER",
            singer: "imase",
            path: "https://res.cloudinary.com/dslzbnfu8/video/upload/v1716556073/samples/Durify/NIGHT_DANCER.mp3",
            image: "https://res.cloudinary.com/dslzbnfu8/image/upload/v1716556076/samples/Durify/POP_CUBE.jpg"
        },
        {
            name: "World's Smallest Violin",
            singer: "AJR",
            path: "https://res.cloudinary.com/dslzbnfu8/video/upload/v1716554921/samples/Durify/Worlds_Smallest_Violin.mp3",
            image: "https://res.cloudinary.com/dslzbnfu8/image/upload/v1716555398/samples/Durify/OK_Orchestra.png"
        },
        {
            name: "Die For You",
            singer: "Joji",
            path: "https://res.cloudinary.com/dslzbnfu8/video/upload/v1716565121/samples/Durify/Die_For_You.mp3",
            image: "https://res.cloudinary.com/dslzbnfu8/image/upload/v1716565174/samples/Durify/SMITHEREENS.png"
        },
        {
            name: "Until I Found You",
            singer: "Stephen Sanchez",
            path: "https://res.cloudinary.com/dslzbnfu8/video/upload/v1716567496/samples/Durify/Until_I_Found_You_zdx7ro.mp3",
            image: "https://res.cloudinary.com/dslzbnfu8/image/upload/v1716567507/samples/Durify/Easy_On_My_Eyes_aaqb3s.jpg"
        },
        {
            name: "A Man Without Love",
            singer: "Engelbert Humperdinck",
            path: "https://res.cloudinary.com/dslzbnfu8/video/upload/v1716567825/samples/Durify/A_Man_Without_Love_fxfsdh.mp3",
            image: "https://res.cloudinary.com/dslzbnfu8/image/upload/v1716567832/samples/Durify/AManWithoutLove_z7pzmv.jpg"
        },
        {
            name: "Careless Whisper",
            singer: "George Michael",
            path: "https://res.cloudinary.com/dslzbnfu8/video/upload/v1716577304/samples/Durify/Careless_Whisper_sayw0o.mp3",
            image: "https://res.cloudinary.com/dslzbnfu8/image/upload/v1716577309/samples/Durify/Sex_Figure_hckv8k.jpg"
        },
        {
            name: "Sway to my beat in Cosmos",
            singer: "Robin",
            path: "https://res.cloudinary.com/dyetihvgo/video/upload/v1717000557/music/y2mate.com_-_Sway_to_My_Beat_in_Cosmos_ua1yun.mp3",
            image: "https://res.cloudinary.com/dyetihvgo/image/upload/v1717001752/thumbnail/sway_oxytlu.jpg"
        },
        {
            name: "Die For You",
            singer: "Valorant",
            path: "https://res.cloudinary.com/dyetihvgo/video/upload/v1717000555/music/y2mate.com_-_Die_For_You_ft_Grabbitz_Official_Music_Video_VALORANT_Champions_2021_eex3ft.mp3",
            image: "https://res.cloudinary.com/dyetihvgo/image/upload/v1717001810/thumbnail/die4u_lsrlxp.jpg"
        },
        {
            name: "Interstellar Journey",
            singer: "Honkai Star Rail",
            path: "https://res.cloudinary.com/dyetihvgo/video/upload/v1717000552/music/y2mate.com_-_Interstellar_Journey_hxmzrp.mp3",
            image: "https://res.cloudinary.com/dyetihvgo/image/upload/v1717001758/thumbnail/interJour_lncfoa.jpg"
        }
    ],

    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                        <div class="song ${index === this.currentIndex ? 'active' : ''} index-${index}" dataIndex=${index} >
                            <div class="thumb" style="background-image: url(${song.image})">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `
        })
        playlist.innerHTML = htmls.join('\n')
    },

    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            }
        })
    },

    loadCurrentSong: function () {
        audio.pause();
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
        audio.load();
    },

    updateActiveSong: function () {
        const previousActive = $('.song.active');
        if (previousActive) {
            previousActive.classList.remove('active');
        }

        const newActive = $(`.song.index-${this.currentIndex}`);
        if (newActive) {
            newActive.classList.add('active');
        }
    },

    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong();
        this.updateActiveSong();
    },

    preSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong();
        this.updateActiveSong();
    },

    playRandom: function () {
        var newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (this.playedIndexes.includes(newIndex) || newIndex === this.currentIndex)
        this.playedIndexes.push(newIndex)
        if (this.playedIndexes.length === this.songs.length) {
            this.playedIndexes = []
        }
        this.currentIndex = newIndex;
        this.loadCurrentSong();
        this.updateActiveSong();
    },

    scrollToActiveSong: function () {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }, 100)
    },

    handleEvents: function () {
        const _this = this;
        const cdWidth = cd.offsetWidth;
        const cdThumbAnimate = cdThumb.animate([
            { transform: "rotate(360deg)" }
        ], {
            duration: 20000,
            iterations: Infinity,
        })
        cdThumbAnimate.pause();

        document.onscroll = () => {
            const scroll = window.scrollY
            const newcdWidth = cdWidth - scroll;
            if (newcdWidth < 0) {
                cd.style.width = 0;
            }
            else cd.style.width = newcdWidth + 'px';
            cd.style.opacity = newcdWidth / cdWidth;
        }

        dashboard.onclick = function () {
            _this.isDashboardFocused = true
        };

        document.onclick = function (e) {
            if (!dashboard.contains(e.target)) {
                _this.isDashboardFocused = false
            }
        }

        document.onkeydown = function (e) {
            if (e.shiftKey && e.code === 'ArrowLeft') {
                if (_this.isRandom) {
                    _this.playRandom();
                } else {
                    _this.preSong();
                }
                audio.play().catch(error => {
                    if (error.name === "AbortError") {
                        console.warn("Play request was interrupted.");
                    } else {
                        console.error("Error playing audio:", error);
                    }
                });
                _this.scrollToActiveSong();
                cdThumbAnimate.cancel();
                cdThumbAnimate.play();
            }

            if (e.shiftKey && e.code === 'ArrowRight') {
                if (_this.isRandom) {
                    _this.playRandom();
                } else {
                    _this.nextSong();
                }
                audio.play().catch(error => {
                    if (error.name === "AbortError") {
                        console.warn("Play request was interrupted.");
                    } else {
                        console.error("Error playing audio:", error);
                    }
                });
                _this.scrollToActiveSong();
                cdThumbAnimate.cancel();
                cdThumbAnimate.play();
            }

            if (e.code === 'Space') {
                if (_this.isDashboardFocused) {
                    e.preventDefault();
                    if (_this.isPlaying) {
                        audio.pause();
                    } else {
                        audio.play();
                    }
                }
            }

            if(e.code === 'ArrowRight' && !e.shiftKey) {
                audio.currentTime += 5;
            }

            if(e.code === 'ArrowLeft' && !e.shiftKey) {
                audio.currentTime -= 5;
            }

            if(e.code === 'KeyR') {
                _this.isRepeated = !_this.isRepeated
                repeatBtn.classList.toggle("active");
            }

            if(e.code === 'KeyF') {
                _this.isRandom = !_this.isRandom
                randomBtn.classList.toggle("active");
            }
        }

        repeatBtn.onclick = function () {
            _this.isRepeated = !_this.isRepeated
            repeatBtn.classList.toggle("active");
        }

        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandom();
            } else {
                _this.nextSong();
            }
            audio.play().catch(error => {
                if (error.name === "AbortError") {
                    console.warn("Play request was interrupted.");
                } else {
                    console.error("Error playing audio:", error);
                }
            });
            _this.scrollToActiveSong();
            cdThumbAnimate.cancel();
            cdThumbAnimate.play();
        }

        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }

        preBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandom();
            } else {
                _this.preSong();
            }
            audio.play().catch(error => {
                if (error.name === "AbortError") {
                    console.warn("Play request was interrupted.");
                } else {
                    console.error("Error playing audio:", error);
                }
            });
            _this.scrollToActiveSong();
            cdThumbAnimate.cancel();
            cdThumbAnimate.play();
        }

        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle("active");
        }

        playlist.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)');
            if (songNode) {
                _this.currentIndex = songNode.getAttribute('dataIndex');
                _this.loadCurrentSong();
                _this.updateActiveSong();
                audio.play();
            }
        }

        audio.onplay = function () {
            cdThumbAnimate.play();
            _this.isPlaying = true;
            player.classList.add("playing");
            audio.volume = 0.05;
        }

        audio.onpause = function () {
            cdThumbAnimate.pause();
            _this.isPlaying = false;
            player.classList.remove("playing");
        }

        audio.onended = function () {
            if (_this.isRepeated) {
                audio.play();
                cdThumbAnimate.cancel();
                cdThumbAnimate.play();
            } else {
                nextBtn.click();
            }
        }

        audio.ontimeupdate = function () {
            if (audio.duration) {
                const percentage = audio.currentTime / audio.duration * 100;
                progressBar.value = percentage;
            }
        }

        progressBar.oninput = function (e) {
            const newTime = audio.duration / 100 * e.target.value
            audio.currentTime = newTime
        }
    },

    start: function () {
        this.defineProperties();

        this.loadCurrentSong();

        this.handleEvents();

        this.render();
    }
}
app.start();