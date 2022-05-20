// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from '../../src/utils/dbConnect';
dbConnect().then(r => r);
export default async (req, res) => {
  res.json({ name: 'Divyesh' })
}
