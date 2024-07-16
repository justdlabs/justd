import { Card, Grid } from '@/components/ui'

export default function GridCollectionsDemo() {
    return (
        <Grid
            aria-label='List articles'
            columns={{ initial: 1, sm: 2, '2xl': 3 }}
            gap={2}
            items={articles}
        >
            {(item) => (
                <Grid.Item>
                    <Card>
                        <Card.Header>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Description>{item.description}</Card.Description>
                        </Card.Header>
                    </Card>
                </Grid.Item>
            )}
        </Grid>
    )
}

const articles = [
    {
        id: 1,
        title: 'Understanding React Hooks',
        description:
            "Get the lowdown on React Hooks, how to use 'em, and best practices for those sleek functional components."
    },
    {
        id: 2,
        title: 'Mastering TypeScript',
        description:
            'Dive deep into TypeScript, from basic stuff to pro features, for building rock-solid apps.'
    },
    {
        id: 3,
        title: 'Laravel Eloquent Tips',
        description:
            'Check out advanced tricks for using Laravel Eloquent ORM to make your database game strong.'
    },
    {
        id: 4,
        title: 'Building with Next.js',
        description:
            'A full-on tutorial on creating server-rendered React apps with the Next.js framework.'
    },
    {
        id: 5,
        title: 'Inertia.js for Full-Stack Devs',
        description:
            'Learn how Inertia.js smooths out the gap between client-side frameworks and server-side apps.'
    },
    {
        id: 6,
        title: 'Optimizing Web Performance',
        description:
            'Tips and tricks to boost the performance and speed of your web apps.'
    }
]
