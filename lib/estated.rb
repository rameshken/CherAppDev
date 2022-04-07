class Estated
  def self.property_profile(params)
    # url = ENV['ESTATED_API_URL']
    url = "https://sandbox.estated.com/v4/property"    
    params = {
      street_address: "2130 NW 19th St",
      city: "Oklahoma City",
      state: "OK",
      zip_code: "73107",
      token: "hMQUHiVsqzUQeXgENpGWgd1D8RHFZh"
    }
    
    Rails.logger.info "\nEstated API-=-=-=-"
    response = RestClient.get(url, Accept: 'application/json', params: params)

    Rails.logger.info "Request: #{response.request.method.upcase} #{response.request.url}"
    Rails.logger.info "Response: #{response.code} OK\n"
    return {} if response.code != 200

    response_data = JSON.parse(response.body)
    response_data['data']
  rescue StandardError => _e
    Rails.logger.info "Request: #{_e.response.request.method.upcase} #{_e.response.request.url}"
    Rails.logger.info "Response: #{JSON.parse(_e.response)&.dig('error')}\n"
    return {}
  end
end
