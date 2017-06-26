class EmailQueue < Que::Job
  # Default settings for this job. These are optional - without them, jobs
  # will default to priority 100 and run immediately.
  @priority = 10
  @run_at = proc { 1.minute.from_now }

  def run(variant_id)
    ActiveRecord::Base.transaction do
      EnquiryMailer.product_promotion(variant_id).deliver_now
      destroy
    end
  end
end