require "test_helper"

class HogesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get hoges_new_url
    assert_response :success
  end

  test "should get create" do
    get hoges_create_url
    assert_response :success
  end
end
