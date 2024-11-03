import requests
import json
from datetime import datetime
import os
from typing import Dict, List, Optional

class InstagramAPIClient:
    def __init__(self, access_token: str):
        """
        Initialize the Instagram API client
        
        Args:
            access_token (str): Instagram Graph API access token
        """
        self.access_token = access_token
        self.base_url = "https://graph.instagram.com/v12.0"
        
    def get_user_profile(self) -> Dict:
        """
        Get basic information about the authenticated Instagram account
        
        Returns:
            Dict containing user profile information
        """
        endpoint = f"{self.base_url}/me"
        params = {
            "fields": "id,username,account_type,media_count",
            "access_token": self.access_token
        }
        
        response = requests.get(endpoint, params=params)
        response.raise_for_status()
        return response.json()
    
    def get_user_media(self, limit: int = 25) -> List[Dict]:
        """
        Get recent media posts from the authenticated account
        
        Args:
            limit (int): Maximum number of posts to retrieve (default: 25)
            
        Returns:
            List of dictionaries containing media information
        """
        endpoint = f"{self.base_url}/me/media"
        params = {
            "fields": "id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count",
            "access_token": self.access_token,
            "limit": limit
        }
        
        response = requests.get(endpoint, params=params)
        response.raise_for_status()
        return response.json().get("data", [])
    
    def get_media_insights(self, media_id: str) -> Dict:
        """
        Get insights/metrics for a specific media post
        
        Args:
            media_id (str): ID of the media post
            
        Returns:
            Dict containing media insights
        """
        endpoint = f"{self.base_url}/{media_id}/insights"
        params = {
            "metric": "engagement,impressions,reach",
            "access_token": self.access_token
        }
        
        response = requests.get(endpoint, params=params)
        response.raise_for_status()
        return response.json()

    def save_media_to_file(self, media_list: List[Dict], filename: str = "instagram_data.json"):
        """
        Save retrieved media data to a JSON file
        
        Args:
            media_list (List[Dict]): List of media items to save
            filename (str): Name of the output file
        """
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(media_list, f, indent=2, ensure_ascii=False)
