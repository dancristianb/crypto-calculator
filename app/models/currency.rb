class Currency < ApplicationRecord
  RELATIVE_TO = 'usd'.freeze

  def current_price
    url = "https://api.coingecko.com/api/v3/simple/price?ids=#{slug}&vs_currencies=#{RELATIVE_TO}"
    response = HTTParty.get(url)

    # TODO: check response.success?
    JSON.parse(response.body).dig(slug.to_s, RELATIVE_TO)
  end

  def calculate_value(amount)
    (current_price.to_f * amount.to_f).round(4)
  end
end
