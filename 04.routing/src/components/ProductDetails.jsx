import { useState, useEffect } from 'react';

import { useParams } from 'react-router';

const templateProduct = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' }
    ],
    images: [
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.'
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.'
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.'
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.'
        }
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true }
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton'
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'
};

export default function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const abortController = new AbortController();

        fetch(`https://fakestoreapi.com/products/${productId}`, { signal: abortController.signal })
            .then((response) => response.json())
            .then((result) => setProduct(result));

        return () => {
            abortController.abort();
        };
    }, [productId]);

    return (
        <div className='bg-white'>
            <div className='pt-6'>
                <nav aria-label='Breadcrumb'>
                    <ol
                        role='list'
                        className='mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8'
                    >
                        {templateProduct.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className='flex items-center'>
                                    <a
                                        href={breadcrumb.href}
                                        className='mr-2 text-sm font-medium text-gray-900'
                                    >
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill='currentColor'
                                        width={16}
                                        height={20}
                                        viewBox='0 0 16 20'
                                        aria-hidden='true'
                                        className='h-5 w-4 text-gray-300'
                                    >
                                        <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className='text-sm'>
                            <a
                                href={product.href}
                                aria-current='page'
                                className='font-medium text-gray-500 hover:text-gray-600'
                            >
                                {product.title}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
                    <img
                        alt={product.title}
                        src={product.image}
                        className='aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto'
                    />
                </div>

                {/* Product info */}
                <div className='mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24'>
                    <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
                        <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                            {product.title}
                        </h1>
                    </div>

                    <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16'>
                        {/* Description and details */}
                        <div>
                            <h3 className='sr-only'>Description</h3>

                            <div className='space-y-6'>
                                <p className='text-base text-gray-900'>{product.description}</p>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <h3 className='text-sm font-medium text-gray-900'>Highlights</h3>

                            <div className='mt-4'>
                                <ul role='list' className='list-disc space-y-2 pl-4 text-sm'>
                                    {templateProduct.highlights.map((highlight) => (
                                        <li key={highlight} className='text-gray-400'>
                                            <span className='text-gray-600'>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <h2 className='text-sm font-medium text-gray-900'>Category</h2>

                            <div className='mt-4 space-y-6'>
                                <p className='text-sm text-gray-600'>{product.category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
