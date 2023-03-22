import { events } from './data.json';

export default function handler(req, res) {
  const { slug } = req.query;
  const eventData = events.filter((event) => event.slug === slug);
  if (req.method === 'GET') {
    res.status(200).json(eventData);
  } else {
    res.setHeader('Allow', ['Get']);
    res.status(405).json({ message: `method ${req.method} is not allowed` });
  }
}
