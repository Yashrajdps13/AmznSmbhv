# app.py
import requests
from flask import Flask, jsonify, request
from functools import wraps
import os
import json
from datetime import datetime
from fetchData import InstagramAPIClient

app = Flask(__name__)

# Error handling decorator
def handle_errors(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        try:
            return f(*args, **kwargs)
        except requests.exceptions.RequestException as e:
            return jsonify({
                'error': 'Instagram API error',
                'message': str(e)
            }), 503
        except Exception as e:
            return jsonify({
                'error': 'Server error',
                'message': str(e)
            }), 500
    return decorated_function
    
# Initialize Instagram client
ACCESS_TOKEN = "IGQWRPNXJxZAUduQzl4WldRT0haVHc0LXBuN2daUWNYWnJDNFFJeE1BcTc3ZAk5zUGhnVmpRd3VxMV9Ic1QzNGRYU1Q5SlF3NmJPUFlHQVA4Rl84OFlCWUNDcmZAFTmpIYXBHY2RiSEMwN3JlRHQ3MkdOS2NRQ1dwQ0EZD"
instagram_client = InstagramAPIClient(ACCESS_TOKEN)
@app.route('/', methods=['GET'])
def home():
    return jsonify({
        'message': "This is no time for caution"
    })

@app.route('/api/dashboard', methods=['GET'])
@handle_errors
def get_dashboard():
    """Get combined dashboard data including profile and recent posts"""
    profile = instagram_client.get_user_profile()
    recent_media = instagram_client.get_user_media(limit=5)
    engagement_metrics = instagram_client.calculate_engagement_metrics(recent_media)
    
    return jsonify({
        'profile': profile,
        'metrics': {
            'total_posts': profile.get('media_count', 0),
            **engagement_metrics
        },
        'recent_posts': recent_media
    })

@app.errorhandler(404)
def not_found(e):
    return jsonify({'error': 'Not found', 'message': 'The requested resource was not found'}), 404

@app.errorhandler(405)
def method_not_allowed(e):
    return jsonify({'error': 'Method not allowed', 'message': 'The method is not allowed for this endpoint'}), 405

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)