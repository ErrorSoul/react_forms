# frozen_string_literal: true
require 'bundler/setup'
require_relative "react_forms/version"
require_relative "react_forms/renderer"

module ReactForms
  class Error < StandardError; end
  # Your code goes here...


end
names = %w[email password]
ReactForms::Renderer.new(names).render_to_file
