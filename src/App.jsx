import { motion } from 'framer-motion';
import {
  Leaf,
  Star,
  Home,
  Leaf as LeafHeart,
  Sparkles,
  Waves,
  Compass,
  Camera,
  MessageCircle,
  MapPin,
  Share2,
} from 'lucide-react';

const navLinks = ['Stays', 'Experiences', 'About Us', 'Sustainability', 'Blog', 'Contact'];

const amenities = [
  {
    title: 'Sustainable Design',
    description: 'Crafted with reclaimed wood, natural stone, and geothermal comfort.',
    icon: Home,
  },
  {
    title: 'Farm to Table',
    description: 'Seasonal menus sourced daily from our organic forest kitchen.',
    icon: LeafHeart,
  },
  {
    title: 'Forest Spa',
    description: 'Holistic rituals, steam grottos, and open-air massage platforms.',
    icon: Sparkles,
  },
  {
    title: 'Guided Nature Walks',
    description: 'Curated immersive treks through wild canopy and hidden springs.',
    icon: Compass,
  },
];

const retreats = [
  {
    name: 'Cedar Hearth Cabin',
    price: '$420 / night',
    tags: '2 Beds • 2 Baths',
    image: 'https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781620858/forest_cabin_wugege.jpg',
  },
  {
    name: 'Lakeside Lodge',
    price: '$580 / night',
    tags: '3 Beds • 2.5 Baths',
    image: 'https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781620858/lakeside_lodge_qr6syd.jpg',
  },
  {
    name: 'Aerie Treehouse',
    price: '$350 / night',
    tags: '1 Bed • 1 Bath',
    image: 'https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781620859/treehouse_o2o1nk.jpg',
  },
];

const experienceValues = [
  'Morning forest meditation by the creek',
  'Personalized herbal tea workshops',
  'Sunset bonfires with acoustic storytelling',
  'Private sky observatory sessions',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.12,
      ease: 'easeOut',
    },
  }),
};

function App() {
  return (
    <div className="min-h-screen bg-cream text-forestDeep">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-cream/80 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.28em] text-forestDeep">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 bg-warmWhite text-forest">
              <Leaf className="h-5 w-5" aria-hidden="true" />
            </span>
            PINEHAVEN ECO RETREATS
          </a>
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium uppercase tracking-[0.25em] text-forestDeep transition hover:text-olive"
              >
                {link}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-forest px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream shadow-[0_12px_30px_rgba(44,58,45,0.16)] transition duration-300 hover:scale-[1.02] hover:shadow-xl md:inline-flex"
          >
            Book Your Stay
          </a>
        </div>
      </nav>

      <main className="overflow-hidden pt-24">
        <section id="home" className="relative isolate overflow-hidden px-6 pb-20 pt-16 md:px-8 lg:px-10">
          <div className="absolute left-[-4rem] top-24 h-72 w-72 rounded-full bg-sage/30 blur-3xl animate-float-slow" />
          <div className="absolute right-[-3rem] top-40 h-64 w-64 rounded-full bg-olive/25 blur-3xl animate-float-slow" />
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-24">
            <motion.div
              className="max-w-2xl pt-12"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
            >
              <p className="mb-6 inline-flex rounded-full border border-olive/20 bg-warmWhite/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-olive shadow-sm">
                Luxury eco escapes
              </p>
              <div className="space-y-6">
                <h1 className="text-5xl font-medium leading-[1.05] tracking-tight text-forestDeep sm:text-6xl lg:text-7xl">
                  Escape.
                  <span className="block text-olive italic">Recharge.</span>
                  <span className="block text-forest font-bold">Reconnect.</span>
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                  Discover Pinehaven, a sanctuary of handcrafted cabins, regenerative dining, and forest-led rituals designed for modern travelers seeking mindful luxury.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#retreats"
                  className="inline-flex items-center justify-center rounded-full bg-forest px-8 py-4 text-sm font-semibold text-cream transition duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  Explore Retreats
                </a>
                <a
                  href="#experiences"
                  className="inline-flex items-center justify-center rounded-full border border-forest px-8 py-4 text-sm font-semibold text-forest transition duration-300 hover:bg-forest hover:text-cream"
                >
                  View Experiences
                </a>
              </div>
              <div className="mt-10 flex items-center gap-4 rounded-3xl bg-warmWhite/80 p-5 shadow-glow">
                <div className="inline-flex items-center justify-center rounded-2xl bg-forestDeep px-3 py-2 text-cream">
                  <Star className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-olive">Trusted Retreat</p>
                  <p className="text-sm font-semibold text-forestDeep">4.9/5 rating from forest travelers</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-[2.5rem] bg-warmWhite/70 p-6 shadow-glow lg:p-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <div className="relative overflow-hidden rounded-[2rem] bg-forestDeep/5">
                <div className="absolute inset-0 hero-video-mask bg-gradient-to-br from-transparent via-warmWhite to-cream opacity-90" />
                <video
                  className="h-full min-h-[420px] w-full object-cover scale-[1.5]"
                  src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/forest_hero_bg_video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="Forest retreat scenery video"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="stays" className="px-6 py-24 md:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mb-14 max-w-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-olive">Amenities</p>
              <h2 className="text-4xl font-semibold leading-[1.05] text-forestDeep sm:text-5xl">
                Refined comforts rooted in nature.
              </h2>
            </motion.div>
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {amenities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    className="rounded-[2rem] border border-white/80 bg-warmWhite/80 p-8 shadow-[0_20px_60px_rgba(40,40,30,0.08)]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={index * 0.2}
                  >
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-sage/10 text-forestDeep shadow-sm">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-forestDeep">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="retreats" className="px-6 py-24 md:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mb-14 max-w-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-olive">Retreats</p>
              <h2 className="text-4xl font-semibold leading-[1.05] text-forestDeep sm:text-5xl">
                Handpicked lodges designed for slow discovery.
              </h2>
            </motion.div>
            <div className="grid gap-8 lg:grid-cols-3">
              {retreats.map((item, index) => (
                <motion.article
                  key={item.name}
                  className={`group overflow-hidden rounded-[2rem] bg-warmWhite shadow-[0_30px_80px_rgba(40,40,30,0.12)] ${
                    index === 1 ? 'lg:mt-10' : index === 2 ? 'lg:-mt-6' : ''
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={index * 0.15}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      loading="lazy"
                      alt={item.name}
                      className="h-96 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4 p-8">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-forestDeep">{item.name}</h3>
                      <span className="rounded-full bg-olive/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-olive">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">{item.tags}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiences" className="px-6 py-24 md:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              className="relative overflow-hidden rounded-[2.5rem] bg-forestDeep/5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781620859/treehouse_o2o1nk.jpg"
                alt="Luxury forest experience"
                loading="lazy"
                className="h-[700px] w-full object-cover"
              />
            </motion.div>
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-olive">Experiences</p>
                <h2 className="text-4xl font-semibold leading-[1.05] text-forestDeep sm:text-5xl">
                  Curated rituals for relaxed exploration.
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-muted">
                  Each stay is accompanied by personal guides, seasonal gatherings, and quiet corners made to deepen your connection with the forest.
                </p>
              </div>
              <div className="grid gap-6">
                {experienceValues.map((item, index) => (
                  <motion.div
                    key={item}
                    className="rounded-[2rem] border border-white/80 bg-warmWhite/80 p-6 shadow-[0_18px_50px_rgba(40,40,30,0.08)]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={index * 0.17}
                  >
                    <p className="text-lg font-medium text-forestDeep">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about-us" className="bg-forestDeep px-6 py-24 text-cream md:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="space-y-8">
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-olive/80">Our Story</p>
              <h2 className="text-4xl font-semibold leading-[1.05] sm:text-5xl">
                Building a regenerative retreat that feels timeless and alive.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-cream/90">
                From local artisans to restorative landscapes, Pinehaven is conceived as a living place where every detail is intentional, every meal is seasonal, and every stay supports the surrounding forest.
              </p>
              <p className="text-base leading-relaxed text-cream/80">
                Our designs honor quiet luxury by pairing organic textures with comfortable form, celebrating the wild while cultivating calm.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-cream/5 p-6 shadow-glow">
              <img
                src="https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781620859/story_interior_xccfu0.jpg"
                loading="lazy"
                alt="Story interior of eco retreat"
                className="h-[520px] w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section id="newsletter" className="px-6 py-24 md:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-forestDeep px-8 py-16 text-cream shadow-glow">
            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781620858/forest_cabin_wugege.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-olive/70">Newsletter</p>
                <h2 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl">
                  Get travel inspiration & exclusive offers.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/80">
                  Join our inner circle for early access to seasonal retreats, curated journeys, and private guest events.
                </p>
              </div>
              <form className="rounded-[2.5rem] border border-white/10 bg-cream/95 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-full border border-forest/10 bg-white px-6 py-4 text-sm text-forestDeep outline-none transition focus:border-forest focus:ring-4 focus:ring-forest/10"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-forest px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    Join
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/80 bg-warmWhite px-6 py-16 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr_0.8fr]">
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.28em] text-forestDeep">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 bg-cream text-forest">
                <Leaf className="h-5 w-5" aria-hidden="true" />
              </span>
              Pinehaven
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              A premium eco retreat collection where modern luxury meets restored wildland.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-forestDeep">Explore</p>
            <ul className="space-y-3 text-sm text-muted">
              {['Stay', 'Experiences', 'About', 'Sustainability'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="transition hover:text-forestDeep">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-forestDeep">Contact</p>
            <p className="text-sm leading-relaxed text-muted">hello@pinehavenretreats.com</p>
            <p className="text-sm leading-relaxed text-muted">+1 (800) 555 0123</p>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-forestDeep">Social</p>
            <div className="flex flex-wrap gap-3">
              {[Camera, MessageCircle, MapPin, Share2].map((Icon, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label="Social link"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-forest/15 bg-cream text-forest transition hover:bg-forest hover:text-cream"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-forestDeep">Address</p>
            <p className="text-sm leading-relaxed text-muted">Pinehaven Road, Whispering Pines Valley</p>
            <p className="text-sm leading-relaxed text-muted">Sustainable luxury retreats, available year-round.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
