import { mastery, innovation, impact, collaboration } from "@/app/index.js";

export const MOCK_POSTS = [
    {
        _id: "mock-1",
        title: "The Future of Digital Excellence in Africa",
        slug: { current: "digital-excellence-africa" },
        mainImage: mastery.src || mastery,
        publishedAt: new Date().toISOString(),
        author: "Seynation Masterminds",
        isPlaceholder: true,
        body: [
            {
                _key: 'block1',
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _key: 'span1',
                        _type: 'span',
                        text: "The digital landscape in Africa is evolving at an unprecedented pace. From fintech revolutions to the rise of specialized tech hubs, the continent is positioning itself as a global leader in innovation. At Seynation, we believe that 'Engineering Digital Brilliance' is not just a slogan, but a commitment to building a future where African businesses thrive on the global stage."
                    }
                ]
            },
            {
                _key: 'block2',
                _type: 'block',
                style: 'h2',
                children: [
                    {
                        _key: 'span2',
                        _type: 'span',
                        text: "Innovation is Our DNA"
                    }
                ]
            },
            {
                _key: 'block3',
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _key: 'span3',
                        _type: 'span',
                        text: "We focus on solving complex challenges with elegant, scalable solutions. Our approach combines technical mastery with creative intuition to deliver experiences that truly resonate."
                    }
                ]
            }
        ]
    },
    {
        _id: "mock-2",
        title: "Engineering Innovation: Beyond the Code",
        slug: { current: "engineering-innovation" },
        mainImage: innovation.src || innovation,
        publishedAt: new Date().toISOString(),
        author: "Tech Team",
        isPlaceholder: true,
        body: [
            {
                _key: 'block1',
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _key: 'span1',
                        _type: 'span',
                        text: "True innovation happens at the intersection of architecture and empathy. It's about understanding the human behind the screen and crafting code that makes their lives easier, more efficient, and more impactful."
                    }
                ]
            }
        ]
    },
    {
        _id: "mock-3",
        title: "Creating Lasting Impact Through Design",
        slug: { current: "impact-through-design" },
        mainImage: impact.src || impact,
        publishedAt: new Date().toISOString(),
        author: "Creative Dept",
        isPlaceholder: true,
        body: [
            {
                _key: 'block1',
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _key: 'span1',
                        _type: 'span',
                        text: "Design is more than aesthetics; it's a strategic tool for growth. Our creative department specializes in brand identities that are not only beautiful but also tell a compelling story of mastery and innovation."
                    }
                ]
            }
        ]
    },
    {
        _id: "mock-4",
        title: "The Power of Collaboration in Modern Tech",
        slug: { current: "collaboration-tech" },
        mainImage: collaboration.src || collaboration,
        publishedAt: new Date().toISOString(),
        author: "Strategy Team",
        isPlaceholder: true,
        body: [
            {
                _key: 'block1',
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _key: 'span1',
                        _type: 'span',
                        text: "No mastermind works alone. The most significant digital transformations are born from seamless collaboration between designers, developers, and strategists. At Seynation, we foster an environment where every idea is a potential breakthrough."
                    }
                ]
            }
        ]
    }
];
