//
//  Post.swift
//  Browser
//
//  Created by Jennifer Brisbane on 1/10/16.
//  Copyright © 2016 jellroll. All rights reserved.
//

import UIKit

class Post: NSObject {

    var postTitle: String = ""
    var postURL: String = ""
    
    init(dictionary: Dictionary<String, String>) {
        self.postTitle = dictionary["postTitle"]!
        self.postURL = dictionary["postURL"]!
        super.init()
    }
    
    
}
