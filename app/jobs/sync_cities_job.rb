# frozen_string_literal: true

class SyncCitiesJob
  include Sidekiq::Worker

  def perform
    SyncCitiesService.new.synchronize
  end
end
