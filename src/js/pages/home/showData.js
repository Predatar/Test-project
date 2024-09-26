import { getData } from '@/js/service/index'

export default async function showData() {
  const loader = document.querySelector('.loader-wrap')
  const productChoiceOptions = document.querySelector('.product-choice__options')

  loader.classList.add('show')

  const data = await getData()
  const elements = data?.data?.result?.elements

  elements.forEach(elem => {
    productChoiceOptions.innerHTML += /* html */ `
		<div class="product-option">
			<div class="product-option__price-wrap">
				<div class="product-option__price">
					<span class="product-option__price product-option__price_main">
						$${elem.amount}
					</span>

					<span class="product-option__price product-option__price_sub">
						${elem.license_name.includes('Year') ? '/per year' : '/mo'}
					</span>

					${
            elem.amount_html
              ? `<span class="product-option__old-price">
							${elem.amount_html.split('<')[0]}
						</span>`
              : ''
          }
				</div>
		
				${
          elem.is_best
            ? `<p class="product-option__best">
						Best value
					</p>`
            : ''
        }

				${
          elem.price_key === '50%'
            ? `<div class="product-option__discount img">
					<img src="./images/discount.webp" alt="50% off">
				</div>`
            : ''
        }
			</div>

			<p class="product-option__name">
				${elem.name_prod}
			</p>

			<p class="product-option__terms">
				${elem.license_name}
			</p>

			<a href="${elem.link}" download class="product-option__button">
				<span class="product-option__button-text">Download</span>
				<span class="icon">
					<svg width="30" height="30">
						<use xlink:href="/sprites/sprite.svg#download"></use>
					</svg>
				</span>
			</a>
		</div>
		`
  })

  loader.classList.remove('show')
}
