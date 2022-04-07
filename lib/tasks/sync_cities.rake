# frozen_string_literal: true

namespace :sync_cities do
  task sync: :environment do
    SyncCitiesService.new.execute
  end
end
