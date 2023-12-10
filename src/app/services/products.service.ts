import { Injectable } from '@angular/core';

const domain = 'https://example-domain.com';

export enum ProductType {
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course'
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: IProduct): IProduct {
  return {
    ...product,
    image: `${domain}${product.image}`,
    link: `${domain}${product.link}`
  }
}

export const mockData: IProduct[] = [
  {
    id: '1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title: 'Product 1',
    link: '/product1',
    image: '/images/product1.jpg',
    time: '2023-12-01T08:00:00',
    type: ProductType.Skill,
  },
  {
    id: '2',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Product 2',
    link: '/product2',
    image: '/images/product2.jpg',
    time: '2023-12-02T10:30:00',
    type: ProductType.Intensive,
  },
  {
    id: '3',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    title: 'Product 3',
    link: '/product3',
    image: '/images/product3.jpg',
    time: '2023-12-03T12:45:00',
    type: ProductType.Intensive,
  },
  {
    id: '4',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    title: 'Product 4',
    link: '/product4',
    image: '/images/product4.jpg',
    time: '2023-12-04T15:15:00',
    type: ProductType.Intensive,
  },
  {
    id: '5',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title: 'Product 5',
    link: '/product5',
    image: '/images/product5.jpg',
    time: '2023-12-05T18:30:00',
    type: ProductType.Skill,
  },
  {
    id: '6',
    text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    title: 'Product 6',
    link: '/product6',
    image: '/images/product6.jpg',
    time: '2023-12-06T21:45:00',
    type: ProductType.Skill,
  },
  {
    id: '7',
    text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    title: 'Product 7',
    link: '/product7',
    image: '/images/product7.jpg',
    time: '2023-12-07T23:00:00',
    type: ProductType.Course,
  },
  {
    id: '8',
    text: 'Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    title: 'Product 8',
    link: '/product8',
    image: '/images/product8.jpg',
    time: '2023-12-08T08:15:00',
    type: ProductType.Course,
  },
  {
    id: '9',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    title: 'Product 9',
    link: '/product9',
    image: '/images/product9.jpg',
    time: '2023-12-09T10:30:00',
    type: ProductType.Course,
  },
  {
    id: '10',
    text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    title: 'Product 10',
    link: '/product10',
    image: '/images/product10.jpg',
    time: '2023-12-10T12:45:00',
    type: ProductType.Skill,
  },
  {
    id: '11',
    text: 'Et harum quidem rerum facilis est et expedita distinctio.',
    title: 'Product 11',
    link: '/product11',
    image: '/images/product11.jpg',
    time: '2023-12-11T15:00:00',
    type: ProductType.Course,
  },
]

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly products: IProduct[] = mockData.map(addDomainToLinkAndImage);

  public getById(id: string): IProduct {
    return this.products.find(p => p.id === id)!;
  }

  public get byGroup() {
    return this.products.reduce((group: any, product: IProduct) => {
      if (!group[product.type]) {
        group[product.type] = [];
      } 

      group[product.type].push(product);

      return group;
    }, {})
  }
}
