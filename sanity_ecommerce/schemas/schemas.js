
import product from './product';
import banner from './banner';
import { createSchema } from 'sanity';
import { schemaTypes } from '.';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([product,banner]),
})